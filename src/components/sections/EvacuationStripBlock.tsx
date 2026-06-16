import { useI18n } from "../../i18n/I18nContext";

const STRIP_ICONS = [
  { src: "/assets/icons/strip-icon-24.svg" },
  { src: "/assets/icons/strip-icon-service.svg" },
  { src: "/assets/icons/strip-icon-accident.svg" },
  { src: "/assets/icons/strip-icon-transport-europe.webp", tinted: true },
] as const;

/** Полоса услуг под героем (в legacy — отдельный div, не section) */
export function EvacuationStripBlock() {
  const { common } = useI18n();

  return (
    <div className="evacuation-block__strip">
      <div className="container">
        <div className="evacuation-block__strip-grid">
          {common.landing.strip.map((item, i) => {
            const icon = STRIP_ICONS[i];
            return (
              <div key={item.title} className="evacuation-block__strip-item">
                <img
                  src={icon.src}
                  alt=""
                  className={`evacuation-block__strip-icon${"tinted" in icon && icon.tinted ? " evacuation-block__strip-icon--amber" : ""}`}
                  width={56}
                  height={56}
                />
                <h3 className="evacuation-block__strip-title">{item.title}</h3>
                <p className="evacuation-block__strip-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
