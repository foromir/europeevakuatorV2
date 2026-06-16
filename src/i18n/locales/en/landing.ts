import { ROUTE_PATH, BLOG_IMAGE } from "../../routeConfig";
import { evacuationBlockShared } from "./common";

/** Section copy for home / Austria (shared blocks), EN */
export default {
  evacuation: {
    ...evacuationBlockShared,
    badge: "24/7 across Europe",
    titleRest: "Tow truck across Europe",
    subtitle: "Round-the-clock towing in Europe and roadside assistance",
    text:
      "Stuck on the road? We're here. Breakdown, accident or vehicle transport — we'll reach you anywhere. Recovery and transport in Austria, Slovenia, Slovakia, Hungary, Switzerland, Italy, Croatia, Germany and the Czech Republic. Fast and affordable.",
    slideAlts: [
      "Tow truck in Europe – 24/7 services",
      "Recovery and car transport in Europe",
      "Tow truck work – vehicle transport",
    ],
  },
  strip: [
    {
      title: "Emergency recovery 24/7",
      desc: "Fast, safe recovery any time",
    },
    {
      title: "Delivery to a workshop",
      desc: "We bring your car to a garage, parking or your address",
    },
    {
      title: "Recovery after an accident",
      desc: "Careful recovery of damaged vehicles",
    },
    {
      title: "Transport across Europe",
      desc: "Intercity and international car transport",
    },
  ],
  workflow: {
    title: "How we work",
    subtitle: "Three simple steps from your call to delivery",
    steps: [
      {
        title: "We take your call",
        body:
          "Stop in a safe place, turn on hazards and set up a warning triangle. Call us with the address or coordinates, vehicle make and fault. Dispatch is 24/7.",
      },
      {
        title: "We confirm details",
        body:
          "The operator confirms equipment type, quotes the price and gives an ETA. Fixed pricing — no surprise charges after the call.",
      },
      {
        title: "We head to you",
        body:
          "In the city — within about 20 minutes, outside — up to 40. We load the car and deliver where needed. Professional gear and safe transport.",
      },
    ],
  },
  pricing: {
    title: "Tow truck rates in Europe",
    subtitle:
      "Price depends on dispatch city, distance, vehicle type and condition, and loading complexity. You get the final quote before we roll out — no hidden fees.",
    itemTitle: "Vehicle recovery",
    itemPrice: "from €100",
    itemDescription:
      "We quickly move vehicles of any difficulty — seized axle, no wheels or post-accident — using professional equipment for safe loading. 24/7 dispatch and careful handling.",
  },
  services: {
    title: "Tow truck services in Europe",
    subtitle: "Recovery, transport and roadside help — one call, full solution",
    cards: [
      {
        imgAlt: "Vehicle recovery",
        title: "Recovery and transport",
        paragraphs: [
          "Whatever happened — broken axle, lost wheel or a crash — we arrive fast, load professionally and deliver safely.",
          "We handle tough cases: seized axle, transport without wheels, post-accident. All vehicle types including non-standard. Support 24/7.",
        ],
      },
      {
        imgAlt: "Roadside assistance and escort",
        title: "End-to-end support",
        paragraphs: [
          "Personal handling and full control from assessment to safe delivery. Modern equipment and a complete approach.",
          "Specialised gear and securing methods keep your car safe for the whole route. Our fleet covers all vehicle classes.",
        ],
      },
      {
        imgAlt: "When you need a tow truck",
        title: "When you need us",
        paragraphs: [
          "Highway breakdown, mountain overheating, flat battery, puncture far from a garage or an accident abroad. We clear the car from the road fast and take it somewhere safe.",
          "We recover cars bought in Europe, deliver to workshops, parking or dealers. Cars, SUVs, minibuses and light commercial. Austria, Germany, Czechia, Hungary, Slovenia, Slovakia, Italy, Croatia, Switzerland — call for a quote.",
        ],
      },
      {
        imgAlt: "Why choose our European tow service",
        title: "Why clients choose us",
        paragraphs: [
          "We operate across Europe and specialise in recovery and transport between EU countries and Ukraine. Crews know local roads and pick efficient routes.",
          "Clear terms, fixed price before dispatch, no hidden fees. We help with logistics, paperwork and delivery to customs or repair.",
        ],
      },
    ],
  },
  gallery: {
    title: "Our tow truck work across Europe",
    lightboxClose: "Close",
    descriptions: [
      "Every day we help drivers from simple breakdowns to serious accidents. Our trucks work across Europe.",
      "Photos show our approach: careful loading, modern equipment and responsibility for every vehicle. You can trust us with your car.",
    ],
    gridAlts: [
      "Car recovery in Austria – tow truck Graz area",
      "Tow truck in Europe – transport from Austria to Ukraine",
      "Recovery after highway breakdown in Austria",
    ],
    thumbs: [
      { src: "gallery-1.jpeg", alt: "Car recovery in Austria — loading on tow truck" },
      { src: "gallery-2.jpeg", alt: "Tow truck in Europe — flatbed transport" },
      { src: "gallery-4.jpeg", alt: "Saloon recovery after breakdown in Austria" },
      { src: "gallery-6.jpeg", alt: "Transport to Ukraine from European countries" },
      { src: "gallery-7.jpeg", alt: "Tow truck on highway — driver help in Europe" },
      { src: "gallery-8.jpeg", alt: "Recovery after accident on European road" },
      { src: "gallery-9.jpeg", alt: "International car transport in Europe" },
      { src: "gallery-10.jpeg", alt: "Tow truck delivers car to workshop in Austria" },
      { src: "gallery-14.jpeg", alt: "Loading car on tow truck in Graz" },
      { src: "gallery-15.jpeg", alt: "Recovery from parking in Austria" },
      { src: "gallery-16.jpeg", alt: "Tow truck moves SUV across Europe" },
      { src: "gallery-17.jpeg", alt: "Damaged car transport after accident" },
      { src: "gallery-31.jpeg", alt: "Recovery on European motorway" },
      { src: "gallery-32.jpeg", alt: "Tow truck with trailer for car transport" },
      { src: "gallery-33.jpeg", alt: "Example of tow truck work in Europe" },
    ],
  },
  stats: {
    items: [
      { number: "10+", label: "years in business" },
      { number: "5000+", label: "call-outs" },
      { number: "12", label: "countries" },
    ],
  },
  reviews: {
    title: "Client reviews",
    subtitle: "Real reviews from our Google Business Profile",
    widgetTitle: "Europe-Evakuator reviews on Google",
    widgetPlaceholder: "Add VITE_GOOGLE_MAPS_EMBED_SRC to .env — embed code from Google Maps.",
    viewOnGoogle: "All reviews on Google",
  },
  faq: {
    title: "FAQ about tow trucks in Europe",
    subtitle:
      "If you don't see your question, call our operator — we'll explain everything and find the best option.",
    items: [
      {
        title: "If your car breaks down on the road",
        body:
          "First stay safe: stop where allowed, turn on hazard lights and set a warning triangle. Then call our dispatcher, describe the situation and approximate location. We'll organise help quickly.",
      },
      {
        title: "Tow truck arrival time",
        body:
          "In urban areas usually 20–30 minutes, outside cities up to about an hour. Exact time depends on crew availability and traffic, but we always aim to be as fast as possible.",
      },
      {
        title: "How recovery price is calculated",
        body:
          "It depends on distance, vehicle type, damage and loading complexity. Contact our manager for an exact quote — you'll get the final price before we dispatch.",
      },
      {
        title: "Documents you need",
        body:
          "Usually passport and vehicle documents. Sometimes more paperwork is needed — our specialist will tell you exactly what in your case.",
      },
    ],
  },
  blog: {
    title: "Blog",
    subtitle: "Articles on recovery, car transport and roadside help in Europe",
    eyebrow: "Driver tips",
    articlesCount: "{count} articles",
    readMore: "Read",
    viewAll: "All articles",
    posts: [
      {
        href: ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
        dateIso: "2026-06-10",
        dateLabel: "June 10, 2026",
        title: "What to do if your car breaks down abroad",
        excerpt: "Step by step: calling a tow truck, paperwork and getting the car to a workshop.",
        imagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
        imageAlt: "Car breakdown abroad — tow truck in Europe",
      },
      {
        href: ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
        dateIso: "2026-05-22",
        dateLabel: "May 22, 2026",
        title: "Recovery after an accident: rights and insurance",
        excerpt: "What to do after a crash in the EU, which documents you need and how recovery is paid.",
        imagePath: BLOG_IMAGE.ACCIDENT_INSURANCE,
        imageAlt: "Recovery after an accident in Europe",
      },
      {
        href: ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
        dateIso: "2026-04-18",
        dateLabel: "April 18, 2026",
        title: "Car transport between European countries",
        excerpt: "International transport: routes, timing and cost from anywhere in the EU.",
        imagePath: BLOG_IMAGE.INTERNATIONAL_TRANSPORT,
        imageAlt: "Car transport between European countries",
      },
    ],
  },
  locations: {
    title: "Where we operate",
    rows: [
      {
        code: "at",
        flagAlt: "Austria flag",
        country: "Austria",
        countryHref: ROUTE_PATH.AUSTRIA,
        featuredCityLabel: "Graz",
        featuredCityHref: ROUTE_PATH.AUSTRIA_GRAZ,
        citiesRest: "Vienna, Linz, Salzburg, Innsbruck, Klagenfurt",
      },
      { code: "hr", flagAlt: "Croatia flag", country: "Croatia", citiesLine: "Zagreb, Dubrovnik, Split, Rijeka, Zadar" },
      { code: "cz", flagAlt: "Czechia flag", country: "Czechia", citiesLine: "Prague, Brno, Ostrava, Plzeň, Liberec" },
      { code: "de", flagAlt: "Germany flag", country: "Germany", countryHref: ROUTE_PATH.GERMANY, featuredCityLabel: "Berlin", featuredCityHref: ROUTE_PATH.GERMANY_BERLIN, citiesRest: "Munich, Frankfurt, Hamburg, Cologne" },
      { code: "hu", flagAlt: "Hungary flag", country: "Hungary", citiesLine: "Budapest, Debrecen, Pécs, Szeged, Miskolc" },
      { code: "it", flagAlt: "Italy flag", country: "Italy", citiesLine: "Rome, Milan, Naples, Venice, Bologna" },
      { code: "sk", flagAlt: "Slovakia flag", country: "Slovakia", citiesLine: "Bratislava, Košice, Nitra, Žilina, Trnava" },
      { code: "si", flagAlt: "Slovenia flag", country: "Slovenia", citiesLine: "Ljubljana, Maribor, Celje, Kranj, Koper" },
      { code: "ch", flagAlt: "Switzerland flag", country: "Switzerland", citiesLine: "Geneva, Zurich, Bern, Basel, Lausanne" },
    ],
  },
} as const;
