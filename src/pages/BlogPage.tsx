import { Layout } from "../components/layout";
import { BlogPostGrid } from "../components/sections/BlogPostGrid";
import { useI18n } from "../i18n/I18nContext";

export default function BlogPage() {
  const { common, pages } = useI18n();
  const b = common.landing.blog;
  const seo = pages.blogIndex;

  return (
    <Layout seo={seo}>
      <div className="blog-page">
        <div className="container">
          <header className="blog-page__header">
            <p className="blog-page__eyebrow">{b.eyebrow}</p>
            <h1 className="blog-page__title">{b.title}</h1>
            <p className="blog-page__subtitle">{b.subtitle}</p>
            <p className="blog-page__count">
              {b.articlesCount.replace("{count}", String(b.posts.length))}
            </p>
          </header>
          <BlogPostGrid posts={b.posts} readMore={b.readMore} />
        </div>
      </div>
    </Layout>
  );
}
