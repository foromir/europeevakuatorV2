import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../icons";
import type { HeaderNavCountry } from "../../i18n/locations/headerNav";

type HeaderMobileLocationsMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  openLabel: string;
  closeLabel: string;
  panelAriaLabel: string;
  countries: HeaderNavCountry[];
  localizedPath: (path: string) => string;
};

export function HeaderMobileLocationsMenu({
  open,
  onOpenChange,
  title,
  openLabel,
  closeLabel,
  panelAriaLabel,
  countries,
  localizedPath,
}: HeaderMobileLocationsMenuProps) {
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  const [expandedCountries, setExpandedCountries] = useState<ReadonlySet<string>>(() => new Set());
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [toggleTop, setToggleTop] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || !toggleRef.current) return;

    const toggle = toggleRef.current;
    const update = () => {
      setToggleTop(Math.max(0, (window.innerHeight - toggle.offsetHeight) / 2));
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(toggle);
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [mounted, title]);

  const toggleCountry = useCallback((code: string) => {
    setExpandedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  }, []);

  useEffect(() => {
    if (open) return;
    setExpandedCountries(new Set());
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        ref={toggleRef}
        type="button"
        className="header__mobile-locations-toggle"
        style={{
          position: "fixed",
          left: 0,
          top: toggleTop,
          zIndex: 101,
        }}
        aria-expanded={open}
        aria-controls="header-mobile-locations-panel"
        onClick={() => onOpenChange(!open)}
      >
        <Icon name={open ? "times" : "map-marker"} />
        <span className="header__mobile-locations-toggle-text">{title}</span>
        <span className="visually-hidden">{open ? closeLabel : openLabel}</span>
      </button>

      <div
        className={`header__mobile-locations-backdrop${open ? " header__mobile-locations-backdrop--open" : ""}`}
        aria-hidden={!open}
        onClick={close}
      />

      <aside
        id="header-mobile-locations-panel"
        className={`header__mobile-locations-panel${open ? " header__mobile-locations-panel--open" : ""}`}
        aria-label={panelAriaLabel}
        hidden={!open}
      >
        <div className="header__mobile-locations-panel-header">
          <span className="header__mobile-locations-panel-title">{title}</span>
          <button
            type="button"
            className="header__mobile-locations-panel-close"
            aria-label={closeLabel}
            onClick={close}
          >
            <Icon name="times" />
          </button>
        </div>

        <nav className="header__mobile-locations-nav">
          {countries.map((country) => {
            const expanded = expandedCountries.has(country.code);

            return (
              <div
                key={country.code}
                className={`header__mobile-locations-group${expanded ? " header__mobile-locations-group--open" : ""}`}
              >
                <button
                  type="button"
                  className="header__mobile-locations-country"
                  aria-expanded={expanded}
                  onClick={() => toggleCountry(country.code)}
                >
                  <span>{country.label}</span>
                  <Icon name="chevron-down" />
                </button>
                <ul className="header__mobile-locations-cities" hidden={!expanded}>
                  {country.cities.map((city) => (
                    <li key={city.href}>
                      <a
                        href={localizedPath(city.href)}
                        className="header__mobile-locations-city"
                        onClick={close}
                      >
                        {city.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>
    </>,
    document.body,
  );
}
