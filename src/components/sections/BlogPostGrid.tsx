import { Link } from "react-router";
import { useI18n } from "../../i18n/I18nContext";

type BlogPost = {
  href: string;
  dateIso: string;
  dateLabel: string;
  title: string;
  excerpt: string;
  imageAlt: string;
  imagePath?: string;
};

type BlogPostGridProps = {
  posts: readonly BlogPost[];
  readMore: string;
};

export function BlogPostGrid({ posts, readMore }: BlogPostGridProps) {
  const { localizedPath } = useI18n();

  return (
    <div className="blog__grid">
      {posts.map((post) => {
        const isLink = post.href !== "#";
        const postPath = isLink ? localizedPath(post.href) : "#";
        const imagePath = "imagePath" in post ? post.imagePath : undefined;

        return (
          <article
            key={post.href + post.dateIso}
            className={`blog-card${isLink ? "" : " blog-card--soon"}`}
          >
            {imagePath ? (
              isLink ? (
                <Link to={postPath} className="blog-card__image">
                  <img
                    src={imagePath}
                    alt={post.imageAlt}
                    width={360}
                    height={225}
                    loading="lazy"
                  />
                </Link>
              ) : (
                <div className="blog-card__image" aria-hidden="true">
                  <img
                    src={imagePath}
                    alt={post.imageAlt}
                    width={360}
                    height={225}
                    loading="lazy"
                  />
                </div>
              )
            ) : (
              <div className="blog-card__image blog-card__image--placeholder" aria-hidden="true" />
            )}
            <div className="blog-card__body">
              <time className="blog-card__date" dateTime={post.dateIso}>
                {post.dateLabel}
              </time>
              <h3 className="blog-card__title">
                {isLink ? <Link to={postPath}>{post.title}</Link> : <span>{post.title}</span>}
              </h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              {isLink ? (
                <Link to={postPath} className="blog-card__link">
                  {readMore} <i className="fas fa-arrow-right" />
                </Link>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
