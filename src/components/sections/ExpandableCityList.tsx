import { useState } from "react";

export const DEFAULT_VISIBLE_CITIES = 12;

export type ExpandableCityItem = {
  label: string;
  href?: string;
};

type ExpandableCityListProps = {
  cities: readonly ExpandableCityItem[];
  localizedPath: (path: string) => string;
  showAllLabel: string;
  showLessLabel: string;
  initialVisible?: number;
  variant: "tags" | "grid";
  itemKey: (city: ExpandableCityItem, index: number) => string;
};

export function ExpandableCityList({
  cities,
  localizedPath,
  showAllLabel,
  showLessLabel,
  initialVisible = DEFAULT_VISIBLE_CITIES,
  variant,
  itemKey,
}: ExpandableCityListProps) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = cities.length > initialVisible;
  const visible = !needsToggle || expanded ? cities : cities.slice(0, initialVisible);

  const toggle = needsToggle ? (
    <button
      type="button"
      className={
        variant === "tags" ? "locations-list__toggle" : "cities-austria__toggle"
      }
      aria-expanded={expanded}
      onClick={() => setExpanded((value) => !value)}
    >
      {expanded ? showLessLabel : `${showAllLabel} (${cities.length})`}
    </button>
  ) : null;

  if (variant === "tags") {
    return (
      <div className="locations-list__cities-wrap">
        <span className="locations-list__cities">
          {visible.map((city, index) => (
            <a
              key={itemKey(city, index)}
              href={localizedPath(city.href!)}
              className="locations-list__city-link"
            >
              {city.label}
            </a>
          ))}
        </span>
        {toggle}
      </div>
    );
  }

  return (
    <>
      <ul className="cities-austria__list">
        {visible.map((city, index) => (
          <li key={itemKey(city, index)} className="cities-austria__item">
            {city.href ? (
              <a href={localizedPath(city.href)} className="cities-austria__link">
                {city.label}
              </a>
            ) : (
              <span className="cities-austria__label">{city.label}</span>
            )}
          </li>
        ))}
      </ul>
      {toggle}
    </>
  );
}
