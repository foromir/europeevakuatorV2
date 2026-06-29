import { useEffect, useRef } from "react";
import { Icon } from "../icons";
import { useI18n } from "../../i18n/I18nContext";
import { ELFSIGHT_REVIEWS_APP_ID, GOOGLE_MAPS_PLACE_URL } from "../../i18n/routeConfig";

const ELFSIGHT_SCRIPT = "https://elfsightcdn.com/platform.js";

let elfsightScriptPromise: Promise<void> | null = null;

function loadElfsightScript() {
  if (elfsightScriptPromise) return elfsightScriptPromise;

  elfsightScriptPromise = new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Elfsight"));
    document.head.appendChild(script);
  });

  return elfsightScriptPromise;
}

export function ReviewsSection() {
  const { common } = useI18n();
  const r = common.landing.reviews;
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = widgetRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void loadElfsightScript();
      },
      { rootMargin: "200px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <header className="reviews__header">
          <h2 className="reviews__title">{r.title}</h2>
          {r.subtitle ? <p className="reviews__subtitle">{r.subtitle}</p> : null}
        </header>

        <div ref={widgetRef} className="reviews__widget reviews__widget--elfsight">
          <div className={`elfsight-app-${ELFSIGHT_REVIEWS_APP_ID}`} />
        </div>

        {GOOGLE_MAPS_PLACE_URL ? (
          <div className="reviews__footer">
            <a
              href={GOOGLE_MAPS_PLACE_URL}
              className="reviews__google-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="google" />
              {r.viewOnGoogle}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
