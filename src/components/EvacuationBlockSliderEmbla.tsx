import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "./icons";
import {
  HERO_IMAGE_SIZES,
  HERO_IMAGE_WIDTHS,
  ResponsiveImage,
} from "./ui/ResponsiveImage";
import type { EvacuationSliderSlide } from "./EvacuationBlockSlider";

type EvacuationBlockSliderEmblaProps = {
  slides: readonly EvacuationSliderSlide[];
  ariaPrev: string;
  ariaNext: string;
  slideAriaLabels: readonly string[];
  tablistAria: string;
};

/** Embla carousel — loaded dynamically after first paint. */
export function EvacuationBlockSliderEmbla({
  slides,
  ariaPrev,
  ariaNext,
  slideAriaLabels,
  tablistAria,
}: EvacuationBlockSliderEmblaProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <>
      <div className="evacuation-block__slider">
        <button
          type="button"
          className="evacuation-block__arrow evacuation-block__arrow--prev"
          aria-label={ariaPrev}
          onClick={scrollPrev}
        >
          <Icon name="chevron-left" />
        </button>
        <button
          type="button"
          className="evacuation-block__arrow evacuation-block__arrow--next"
          aria-label={ariaNext}
          onClick={scrollNext}
        >
          <Icon name="chevron-right" />
        </button>
        <div className="evacuation-block__embla" ref={emblaRef}>
          <div className="evacuation-block__embla-container">
            {slides.map((slide, i) => (
              <div key={`${slide.src}-${i}`} className="evacuation-block__embla-slide">
                <ResponsiveImage
                  src={slide.src}
                  alt={slide.alt}
                  className="evacuation-block__img"
                  width={slide.width ?? 560}
                  height={slide.height ?? 400}
                  widths={HERO_IMAGE_WIDTHS}
                  sizes={HERO_IMAGE_SIZES}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="evacuation-block__bars" role="group" aria-label={tablistAria}>
        {slideAriaLabels.map((label, i) => (
          <button
            key={label}
            type="button"
            className={`evacuation-block__bar${i === selectedIndex ? " evacuation-block__bar--active" : ""}`}
            aria-label={label}
            aria-current={i === selectedIndex ? "true" : undefined}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}
