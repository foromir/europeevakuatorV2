import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Layout } from "../components/layout";
import {
  BlogSection,
  EvacuationBlockSection,
  EvacuationStripBlock,
  FaqSection,
  GallerySection,
  LocationsSection,
  PricingSection,
  ReviewsSection,
  ServicesSection,
  StatsSection,
  WorkflowSection,
} from "../components/sections";
import { useI18n } from "../i18n/I18nContext";
import { ROUTE_PATH } from "../i18n/routeConfig";

export default function HomePage() {
  const { pages, localizedPath } = useI18n();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash !== "#blog") return;
    navigate(localizedPath(ROUTE_PATH.BLOG), { replace: true });
  }, [navigate, localizedPath]);

  return (
    <Layout seo={pages.home}>
      <EvacuationBlockSection />
      <EvacuationStripBlock />
      <WorkflowSection />
      <StatsSection />
      <PricingSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <BlogSection />
      <LocationsSection />
    </Layout>
  );
}
