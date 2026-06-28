import { lazy, Suspense, useEffect, useState } from "react";
import {
  GALLERY_IMAGE_WIDTHS,
  HERO_IMAGE_SIZES,
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
              widths={GALLERY_IMAGE_WIDTHS}
              sizes={HERO_IMAGE_SIZES}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hero slider: static LCP image first, Embla loads after idle. */
export function EvacuationBlockSlider(props: EvacuationBlockSliderProps) {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, 1));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const id = idle(() => setShowCarousel(true), { timeout: 2000 });
    return () => cancel(id);
  }, []);

  if (!showCarousel) {
    return <StaticHeroSlide slide={props.slides[0]} />;
  }

  return (
    <Suspense fallback={<StaticHeroSlide slide={props.slides[0]} />}>
      <EvacuationBlockSliderEmbla {...props} />
    </Suspense>
  );
}
