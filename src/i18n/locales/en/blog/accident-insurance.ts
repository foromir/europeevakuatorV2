import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Recovery after an accident in Europe — rights, insurance and documents",
  description:
    "What to do after a crash in the EU: calling a tow truck, completing the accident report, dealing with insurers and paying for recovery.",
  canonicalPath: ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
  ogTitle: "Recovery after an accident in Europe — rights, insurance and documents",
  ogDescription:
    "Step by step after a crash in the EU: safety, police, insurance, tow truck and reimbursement.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
  twitterTitle: "Recovery after an accident in Europe",
  twitterDescription:
    "Driver rights, insurance and documents when you need a tow truck after a crash in Europe.",
  ogImagePath: BLOG_IMAGE.ACCIDENT_INSURANCE,
  skipLink: "Skip to article content",
  dateIso: "2026-05-22",
  dateDisplay: "May 22, 2026",
  tag: "Accidents & insurance",
  imagePath: BLOG_IMAGE.ACCIDENT_INSURANCE,
  imageAlt: "Tow truck at the scene of a road accident in Europe",
  h1: "Recovery after an accident: rights and insurance",
  lead:
    "After a crash in another country you need to stay safe and get the paperwork right — that affects whether recovery and repairs are covered.",
  sections: [
    {
      heading: "1. Safety and calling the services",
      body:
        "Turn on hazards, set up a warning triangle and wear a reflective vest. If anyone is injured, call 112. Even for minor damage, record the scene and do not move the car until you agree with the other party or police arrive — in some countries this is required.",
    },
    {
      heading: "2. Accident report and evidence",
      body:
        "Fill in the European accident statement where applicable, photograph damage, number plates, insurance details and the overall scene. Note witness contacts. You will need this for insurance when claiming recovery and repair costs.",
    },
    {
      heading: "3. Contact your insurer",
      body:
        "Notify your insurer and the other party's insurer. Check whether the policy covers recovery (often yes under assistance). Keep the claim number and written confirmation of payment limits.",
    },
    {
      heading: "4. Tow truck and payment",
      body:
        "If the car cannot be driven, call a tow truck and tell dispatch it follows an accident. Agree the price before dispatch and keep the invoice and handover record. If insurance covers it, submit documents for reimbursement.",
    },
  ],
};

export default page;
