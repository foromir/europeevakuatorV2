import { useI18n } from "../../i18n/I18nContext";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  showPhone?: boolean;
};

export function SocialLinks({
  className = "footer__social",
  linkClassName = "footer__social-link",
  showPhone = true,
}: SocialLinksProps) {
  const { common } = useI18n();

  return (
    <div className={className}>
      {showPhone ? (
        <a
          href={`tel:${common.phoneTel}`}
          className={linkClassName}
          title={common.titleCall}
          aria-label={common.ariaCall}
        >
          <i className="fas fa-phone" />
        </a>
      ) : null}
      <a
        href={`mailto:${common.email}`}
        className={linkClassName}
        title={common.titleEmail}
        aria-label={common.ariaEmail}
      >
        <i className="fas fa-envelope" />
      </a>
      <a
        href={common.telegramUrl}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        title={common.titleTelegram}
        aria-label={common.ariaTelegram}
      >
        <i className="fab fa-telegram" />
      </a>
      <a
        href={common.whatsappUrl}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        title={common.titleWhatsapp}
        aria-label={common.ariaWhatsapp}
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}
