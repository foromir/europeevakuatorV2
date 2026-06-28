import { Link } from "react-router";
import { Icon } from "../icons";
import { useI18n } from "../../i18n/I18nContext";
import { ROUTE_PATH } from "../../i18n/routeConfig";
import { BlogPostGrid } from "./BlogPostGrid";

export function BlogSection() {
  const { common, localizedPath } = useI18n();
  const b = common.landing.blog;

  return (
    <section className="blog blog--preview" id="blog">
      <div className="container">
        <header className="blog__header">
          <h2 className="blog__title">{b.title}</h2>
          <p className="blog__subtitle">{b.subtitle}</p>
        </header>
        <BlogPostGrid posts={b.posts} readMore={b.readMore} />
        <div className="blog__footer">
          <Link to={localizedPath(ROUTE_PATH.BLOG)} className="blog__all-link">
            <span>{b.viewAll}</span>
            <Icon name="arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
