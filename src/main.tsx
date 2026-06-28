import "./index.css";

function scheduleAppMount() {
  const mount = () => {
    void import("./bootstrap");
  };

  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
  idle(mount, { timeout: 3000 });
}

if (document.readyState === "complete") {
  scheduleAppMount();
} else {
  window.addEventListener("load", scheduleAppMount, { once: true });
}
