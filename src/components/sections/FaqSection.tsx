import { useState } from "react";
import { useI18n } from "../../i18n/I18nContext";

export function FaqSection() {
  const { common } = useI18n();
  const f = common.landing.faq;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__wrapper">
          <div className="faq__header">
            <div className="faq__header-content">
              <h2 className="faq__title">{f.title}</h2>
              <p className="faq__subtitle">{f.subtitle}</p>
            </div>
          </div>
          <div className="accordion">
            {f.items.map((item, index) => (
              <div
                key={item.title}
                className={`accordion-item${activeIndex === index ? " active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => setActiveIndex((cur) => (cur === index ? null : index))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex((cur) => (cur === index ? null : index));
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {item.title}
                </div>
                <div className="accordion-content">
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
