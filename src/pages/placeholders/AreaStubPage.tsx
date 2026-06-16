import { useParams } from "react-router";
import { Layout } from "../../components/layout";
import {
  EvacuationBlockSection,
  EvacuationStripBlock,
  CitiesListSection,
  WorkflowSection,
  StatsSection,
  PricingSection,
  ServicesSection,
  PopularDirectionsSection,
  GallerySection,
  ReviewsSection,
  FaqSection,
  BlogSection,
  LocationsSection,
} from "../../components/sections";
import { useI18n } from "../../i18n/I18nContext";

export function AreaStubPage() {
  const { country, city, area } = useParams<{ country: string; city: string; area: string }>();
  const { routes } = useI18n();

  const content = routes[`${country}/${city}/${area}`];

  return (
    <Layout seo={content?.seo}>
      <EvacuationBlockSection content={content?.evacuation} />
      <EvacuationStripBlock />
      <CitiesListSection block={content?.landing?.cities} />
      <WorkflowSection />
      <StatsSection />
      <PricingSection />
      <ServicesSection />
      <PopularDirectionsSection block={content?.landing?.directions} />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <BlogSection />
      <LocationsSection />
    </Layout>
  );
}
