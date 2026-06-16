import type { MouseEvent } from "react";
import { useI18n } from "../../i18n/I18nContext";

export function BlogSection() {
  const { common, localizedPath } = useI18n();
  const b = common.landing.blog;

  return (
    <section className="blog" id="blog">
      <div className="container">
        <header className="blog__header">
          <h2 className="blog__title">{b.title}</h2>
          <p className="blog__subtitle">{b.subtitle}</p>
        </header>
        <div className="blog__grid">
          {b.posts.map((post) => {
            const postPath = post.href === "#" ? "#" : localizedPath(post.href);
            return (
            <article
              key={post.href + post.dateIso}
              className="blog-card"
              {...(post.href !== "#"
                ? {
                    "data-href": postPath,
                    style: { cursor: "pointer" as const },
                    onClick: (e: MouseEvent<HTMLElement>) => {
                      if ((e.target as HTMLElement).closest("a")) return;
                      window.location.href = postPath;
                    },
                  }
                : {})}
            >
              <a href={postPath} className="blog-card__image">
                <img
                  src="/assets/images/gallery/gallery-18.jpeg"
                  alt={post.imageAlt}
                  width={360}
                  height={225}
                  loading="lazy"
                />
              </a>
              <div className="blog-card__body">
                <time className="blog-card__date" dateTime={post.dateIso}>
                  {post.dateLabel}
                </time>
                <h3 className="blog-card__title">
                  <a href={postPath}>{post.title}</a>
                </h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <a href={postPath} className="blog-card__link">
                  {b.readMore} <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
