const MODULE_SCRIPT_RE =
  /<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>\s*/g;
const STYLESHEET_RE =
  /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">\s*/g;

/** Move CSS up, defer the app module so it is not on the initial critical path. */
export function optimizeHtmlCriticalPath(html) {
  const jsMatch = html.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
  const cssMatch = html.match(/<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/);
  if (!jsMatch || !cssMatch) return html;

  const js = jsMatch[1];
  const css = cssMatch[1];

  if (html.includes(`s.src = "${js}"`)) return html;

  let out = html
    .replace(MODULE_SCRIPT_RE, "")
    .replace(STYLESHEET_RE, "")
    .replace(
      /(<meta name="viewport"[^>]*\/>)/,
      `$1\n  <link rel="preload" href="${css}" as="style" crossorigin />\n  <link rel="stylesheet" crossorigin href="${css}">`,
    );

  const loader = `
  <script>
    (function () {
      function boot() {
        var s = document.createElement("script");
        s.type = "module";
        s.crossOrigin = "";
        s.src = "${js}";
        document.body.appendChild(s);
      }
      var idle = window.requestIdleCallback || function (cb) { window.setTimeout(cb, 1); };
      if (document.readyState === "complete") {
        idle(boot, { timeout: 4000 });
      } else {
        window.addEventListener("load", function () { idle(boot, { timeout: 4000 }); }, { once: true });
      }
    })();
  </script>`;

  return out.replace("</body>", `${loader}\n</body>`);
}
