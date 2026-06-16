import { useI18n } from "../../i18n/I18nContext";

/** Полоса услуг под героем (в legacy — отдельный div, не section) */
export function EvacuationStripBlock() {
  const { common } = useI18n();
  const icons = [
    "/assets/icons/strip-icon-24.svg",
    "/assets/icons/strip-icon-service.svg",
    "/assets/icons/strip-icon-tow.svg",
    "/assets/icons/icon-tow-truck.svg",
  ];

  return (
    <div className="evacuation-block__strip">
      <div className="container">
        <div className="evacuation-block__strip-grid">
          {common.landing.strip.map((item, i) => (
            <div key={item.title} className="evacuation-block__strip-item">
              <img
                src={icons[i]}
                alt=""
                className="evacuation-block__strip-icon"
                width={56}
                height={56}
              />
              <h3 className="evacuation-block__strip-title">{item.title}</h3>
              <p className="evacuation-block__strip-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
