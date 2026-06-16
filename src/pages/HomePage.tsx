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

export default function HomePage() {
  const { pages } = useI18n();

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
