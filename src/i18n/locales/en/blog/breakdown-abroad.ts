import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Car breakdown abroad — what to do (Europe tow truck tips)",
  description:
    "Step-by-step guide if your car breaks down abroad: staying safe, calling a tow truck in Europe, dealing with insurance and paperwork.",
  canonicalPath: ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
  ogTitle: "Car breakdown abroad — what to do (Europe tow truck tips)",
  ogDescription:
    "Step-by-step: safety, calling a tow truck in Europe, insurance and documents after a breakdown abroad.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
  twitterTitle: "Car breakdown abroad — what to do",
  twitterDescription:
    "Safety, tow truck in Europe, insurance and documents when you break down abroad.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
  skipLink: "Skip to article content",
  dateIso: "2026-06-10",
  dateDisplay: "June 10, 2026",
  tag: "Driver tips",
  imagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
  imageAlt: "Tow truck loading a car after a breakdown on a European road",
  h1: "What to do if your car breaks down abroad",
  lead:
    "A breakdown in another country is stressful. If you follow clear steps, you can stay safe, get help quickly and avoid unnecessary costs.",
  sections: [
    {
      heading: "1. Stay safe",
      body:
        "Stop where allowed, turn on hazard lights and set up a warning triangle. Move to the shoulder or a parking area if you can. At night, wear a reflective vest.",
    },
    {
      heading: "2. Call a tow truck",
      body:
        "Call the dispatch line (for example us — we operate across Europe 24/7). Give the exact address or coordinates, make and model, and describe the fault. The operator will quote the price and ETA.",
    },
    {
      heading: "3. Documents and insurance",
      body:
        "Keep your passport, licence and vehicle documents handy. A European accident statement or insurer contact helps after a collision. For a simple breakdown, passport and service agreement are usually enough.",
    },
    {
      heading: "4. Vehicle delivery",
      body:
        "The tow truck can take your car to a workshop, parking or another address. The price is agreed before dispatch, with no hidden fees. Note arrival time and vehicle condition on handover.",
    },
  ],
};

export default page;
