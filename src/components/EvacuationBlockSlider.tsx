import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  GALLERY_IMAGE_WIDTHS,
  HERO_IMAGE_SIZES,
  HERO_IMAGE_WIDTHS,
  ResponsiveImage,
} from "./ui/ResponsiveImage";

export type EvacuationSliderSlide = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type EvacuationBlockSliderProps = {
  slides: readonly EvacuationSliderSlide[];
  ariaPrev: string;
  ariaNext: string;
  slideAriaLabels: readonly string[];
  tablistAria: string;
};

const EvacuationBlockSliderEmbla = lazy(() =>
  import("./EvacuationBlockSliderEmbla").then((m) => ({ default: m.EvacuationBlockSliderEmbla })),
);

function StaticHeroSlide({ slide }: { slide: EvacuationSliderSlide }) {
  return (
    <div className="evacuation-block__slider">
      <div className="evacuation-block__embla">
        <div className="evacuation-block__embla-container">
          <div className="evacuation-block__embla-slide">
            <ResponsiveImage
              src={slide.src}
              alt={slide.alt}
              className="evacuation-block__img"
              width={slide.width ?? 560}
              height={slide.height ?? 400}
              widths={HERO_IMAGE_WIDTHS}
              sizes={HERO_IMAGE_SIZES}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hero slider: static LCP image first, Embla loads only on user interaction. */
export function EvacuationBlockSlider(props: EvacuationBlockSliderProps) {
  const [showCarousel, setShowCarousel] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;

    const activate = () => setShowCarousel(true);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") activate();
    };

    root.addEventListener("pointerdown", activate, { once: true });
    root.addEventListener("focusin", activate, { once: true });
    window.addEventListener("keydown", onKey, { once: true });

    return () => {
      root.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const content = showCarousel ? (
    <Suspense fallback={<StaticHeroSlide slide={props.slides[0]} />}>
      <EvacuationBlockSliderEmbla {...props} />
    </Suspense>
  ) : (
    <StaticHeroSlide slide={props.slides[0]} />
  );

  return <div ref={sliderRef}>{content}</div>;
}
