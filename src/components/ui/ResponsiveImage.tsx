type ResponsiveImageProps = {
  src: string;
  alt: string;
  widths?: readonly number[];
  sizes?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  className?: string;
  /** Full-resolution URL for lightbox (defaults to original `src`). */
  fullSrc?: string;
};

function stripExtension(src: string): string {
  return src.replace(/\.jpe?g$/i, "");
}

function webpSrcSet(base: string, widths: readonly number[]): string {
  return widths.map((width) => `${base}-${width}.webp ${width}w`).join(", ");
}

/** Responsive WebP image. Expects `-{width}.webp` variants from `scripts/optimize-images.mjs`. */
/** Resolve full-quality gallery URL from a thumbnail `<img>`. */
export function resolveGalleryFullSrc(img: HTMLImageElement): string {
  if (img.dataset.fullSrc) return img.dataset.fullSrc;
  const displayed = img.currentSrc || img.src;
  const withoutVariant = displayed.replace(/-\d+\.webp(?:\?.*)?$/, "");
  if (/\.jpe?g(?:\?.*)?$/i.test(withoutVariant)) return withoutVariant;
  return displayed.replace(/-\d+\.webp(?:\?.*)?$/, "-1120.webp");
}

export function ResponsiveImage({
  src,
  alt,
  widths = [360, 560, 1120],
  sizes = "(max-width: 768px) 90vw, 560px",
  width,
  height,
  loading = "lazy",
  className,
  fullSrc,
}: ResponsiveImageProps) {
  const base = stripExtension(src);
  const fallback = `${base}-${widths[0]}.webp`;

  return (
    <img
      src={fallback}
      srcSet={webpSrcSet(base, widths)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      decoding={loading === "eager" ? "sync" : "async"}
      data-full-src={fullSrc ?? src}
    />
  );
}

export const HERO_IMAGE_SIZES = "(max-width: 768px) 50vw, 560px";
export const GALLERY_IMAGE_SIZES = "(max-width: 768px) 33vw, 400px";
export const SERVICE_IMAGE_SIZES = "(max-width: 768px) 100vw, 486px";
export const BLOG_IMAGE_SIZES = "(max-width: 768px) 90vw, 360px";
export const BLOG_IMAGE_WIDTHS = [360, 720] as const;
export const GALLERY_IMAGE_WIDTHS = [360, 560, 1120] as const;
