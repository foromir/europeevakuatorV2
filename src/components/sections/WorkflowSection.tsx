import { useI18n } from "../../i18n/I18nContext";

const STEP_ICONS = [
  "/assets/icons/icon-hotline.png",
  "/assets/icons/icon-support.png",
  "/assets/icons/icon-tow-truck.png",
];

export function WorkflowSection() {
  const { common } = useI18n();
  const w = common.landing.workflow;

  return (
    <section className="workflow">
      <div className="container">
        <h2 className="workflow__title">{w.title}</h2>
        <p className="workflow__subtitle">{w.subtitle}</p>

        <div className="workflow__steps">
          {w.steps.map((step, i) => (
            <div key={step.title} className="workflow__step">
              <div className="workflow__step-card">
                <div className="workflow__step-icon">
                  <img decoding="async" src={STEP_ICONS[i]} alt="" />
                </div>
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-description">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
