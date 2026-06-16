import { useI18n } from "../../i18n/I18nContext";
import { SocialLinks } from "./SocialLinks";

export function ContactWidget() {
  const { common } = useI18n();

  return (
    <aside className="contact-widget" aria-label={common.contactWidgetAria}>
      <div className="contact-widget__inner">
        <a href={`tel:${common.phoneTel}`} className="contact-widget__call">
          <i className="fas fa-phone" aria-hidden="true" />
          <span className="contact-widget__call-number">{common.phoneDisplay}</span>
        </a>
        <SocialLinks
          className="contact-widget__social"
          linkClassName="contact-widget__social-link"
          showPhone={false}
        />
      </div>
    </aside>
  );
}
