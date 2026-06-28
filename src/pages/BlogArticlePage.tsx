import { useLocation } from "react-router";
import { Layout } from "../components/layout";
import { BLOG_IMAGE_WIDTHS, BLOG_IMAGE_SIZES, ResponsiveImage } from "../components/ui/ResponsiveImage";
import { resolvePage } from "../i18n/seo/resolvePage";
import { NotFoundPage } from "./placeholders";

export default function BlogArticlePage() {
  const { pathname } = useLocation();
  const page = resolvePage(pathname);

  if (!page || page.kind !== "blog") {
    return <NotFoundPage />;
  }

  const article = page.seo;

  return (
    <Layout seo={article}>
      <article className="blog-article">
        <div className="container">
          <div className="blog-article__wrapper">
            <header className="blog-article__header">
              <div className="blog-article__meta">
                <span className="blog-article__tag">{article.tag}</span>
                <time className="blog-article__date" dateTime={article.dateIso}>
                  {article.dateDisplay}
                </time>
              </div>
              <h1 className="blog-article__title">{article.h1}</h1>
              <p className="blog-article__lead">{article.lead}</p>
            </header>

            <figure className="blog-article__image">
              <ResponsiveImage
                src={article.imagePath}
                alt={article.imageAlt}
                widths={BLOG_IMAGE_WIDTHS}
                sizes="(max-width: 768px) 90vw, 720px"
                width={800}
                height={500}
                loading="eager"
              />
            </figure>

            <div className="blog-article__content">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
