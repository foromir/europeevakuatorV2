import { useEffect } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { GALLERY_IMAGE_SIZES, GALLERY_IMAGE_WIDTHS, ResponsiveImage } from "../ui/ResponsiveImage";

const GRID_IMAGES = [
  "/assets/images/gallery/gallery-19.jpeg",
  "/assets/images/gallery/gallery-13.jpeg",
  "/assets/images/gallery/gallery-3.jpeg",
];

export function GallerySection() {
  const { common } = useI18n();
  const g = common.landing.gallery;

  useEffect(() => {
    const closeLabel = g.lightboxClose;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__content">
        <button type="button" class="lightbox__close" aria-label="${closeLabel.replace(/"/g, "&quot;")}">&times;</button>
        <img src="" alt="" class="lightbox__image" />
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox__image") as HTMLImageElement;
    const closeBtn = lightbox.querySelector(".lightbox__close") as HTMLButtonElement;
    const backdrop = lightbox.querySelector(".lightbox__backdrop") as HTMLElement;

    function openLightbox(src: string, alt: string) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("lightbox--open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("lightbox--open");
      document.body.style.overflow = "";
      lightboxImg.src = "";
      lightboxImg.alt = "";
    }

    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.matches(".gallery__img, .gallery__thumb-img")) {
        openLightbox((target as HTMLImageElement).currentSrc || (target as HTMLImageElement).src, (target as HTMLImageElement).alt);
      }
    }

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
    }

    document.addEventListener("click", onDocClick);
    closeBtn.addEventListener("click", closeLightbox);
    backdrop.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeydown);
      closeBtn.removeEventListener("click", closeLightbox);
      backdrop.removeEventListener("click", closeLightbox);
      lightbox.remove();
      document.body.style.overflow = "";
    };
  }, [g.lightboxClose]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__wrapper">
          <div className="gallery__content-text">
            <h2 className="gallery__title">{g.title}</h2>
          </div>

          <div className="gallery__content">
            <div className="gallery__grid">
              {GRID_IMAGES.map((src, i) => (
                <div key={src} className="gallery__item">
                  <ResponsiveImage
                    src={src}
                    alt={g.gridAlts[i]}
                    className="gallery__img"
                    widths={GALLERY_IMAGE_WIDTHS}
                    sizes={GALLERY_IMAGE_SIZES}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="gallery__description-block">
              {g.descriptions.map((text) => (
                <p key={text.slice(0, 50)} className="gallery__description">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="gallery__thumbs">
            {g.thumbs.map(({ src, alt }) => (
              <div key={src} className="gallery__thumb-item">
                <ResponsiveImage
                  src={`/assets/images/gallery/${src}`}
                  alt={alt}
                  className="gallery__thumb-img"
                  widths={GALLERY_IMAGE_WIDTHS}
                  sizes="120px"
                  width={120}
                  height={90}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
