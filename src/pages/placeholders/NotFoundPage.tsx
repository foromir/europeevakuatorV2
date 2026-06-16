import { Link } from "react-router";
import { useI18n } from "../../i18n/I18nContext";
import { Layout } from "../../components/layout";

export function NotFoundPage() {
  const { common, localizedPath } = useI18n();

  return (
    <Layout>
      <div className="route-stub">
        <h1 className="route-stub__title">{common.notFoundTitle}</h1>
        <p className="route-stub__lead">{common.notFoundLead}</p>
        <p>
          <Link to={localizedPath("/")}>{common.backHome}</Link>
        </p>
      </div>
    </Layout>
  );
}
