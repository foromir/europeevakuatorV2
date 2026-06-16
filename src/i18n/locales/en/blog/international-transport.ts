import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Car transport between European countries — routes, timing and cost",
  description:
    "How to arrange international car transport in the EU: tow truck or car carrier, lead times, paperwork and what affects the price.",
  canonicalPath: ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
  ogTitle: "Car transport between European countries — routes, timing and cost",
  ogDescription:
    "International car transport in Europe: choosing the method, route, timing, documents and pricing.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
  twitterTitle: "Car transport between European countries",
  twitterDescription:
    "Routes, timing, documents and cost of international car transport in the EU.",
  ogImagePath: BLOG_IMAGE.INTERNATIONAL_TRANSPORT,
  skipLink: "Skip to article content",
  dateIso: "2026-04-18",
  dateDisplay: "April 18, 2026",
  tag: "Car transport",
  imagePath: BLOG_IMAGE.INTERNATIONAL_TRANSPORT,
  imageAlt: "Tow truck carrying a car on a European route",
  h1: "Car transport between European countries",
  lead:
    "Sometimes after a breakdown or buying a car abroad you need delivery to another EU country. Here is how to choose transport and what to expect on timing and paperwork.",
  sections: [
    {
      heading: "1. Tow truck or car carrier",
      body:
        "For shorter distances (up to a few hundred km) a tow truck is often best — faster and simpler to load. For very long cross-border routes a car carrier is sometimes used, but a tow truck offers direct door-to-door delivery without transshipment.",
    },
    {
      heading: "2. Route and timing",
      body:
        "Lead time depends on distance, borders and traffic. Many EU routes are completed in 1–3 days by tow truck. Dispatch will give an ETA upfront and plan crew breaks on long hauls.",
    },
    {
      heading: "3. Documents",
      body:
        "You need the owner's passport, vehicle documents and a power of attorney if you are not the owner. Crossing Schengen borders usually requires a standard package, but we confirm requirements for your specific route in advance.",
    },
    {
      heading: "4. Cost",
      body:
        "Price depends on mileage, vehicle type, urgency and loading difficulty (AWD, low ground clearance, no rolling). We fix the amount before dispatch. For a quote, the pickup and delivery addresses are enough.",
    },
  ],
};

export default page;
