export const whatsapp = (service?: string) =>
  `https://wa.me/919650093836?text=${encodeURIComponent(service ? `Hello, I would like to enquire about the ${service} consultation. Please share the fees and availability.` : "Hello Pooja, I would like to book a reading. Please help me choose a consultation and share the fees and availability.")}`;
export const instagram = "https://ig.me/m/zenquestbypooja";
export const instagramProfile = "https://www.instagram.com/zenquestbypooja/";
export type Service = {
  id: string;
  title: string;
  purpose: string;
  format: string;
  includes: string[];
  conditions: string;
  returning?: boolean;
  bookingName?: string;
  bookingLabel?: string;
};
export const tarotServices: Service[] = [
  {
    id: "voice",
    title: "Personal Tarot Voice Reading",
    purpose:
      "A little space to pause. Clear guidance you can listen to in your own time.",
    format: "Voice notes · Approx. 10–12 minutes",
    includes: [
      "Up to two clear, non-compound questions",
      "A photograph of your cards and 3–4 WhatsApp voice notes",
      "Delivered within two working days after payment and questions",
    ],
    conditions: "No live interaction or follow-up.",
  },
  {
    id: "clarity",
    title: "Live 30: Clarity",
    purpose: "A focused conversation for the questions that are on your mind.",
    format: "Private live consultation · Up to 30 minutes",
    includes: [
      "A personal Tarot reading with Pooja",
      "Your questions, covered within the booked time",
    ],
    conditions:
      "The session covers what the available time allows. An eligible continuation can be booked separately.",
  },
  {
    id: "deep-dive",
    title: "Live 60: Deep Dive",
    purpose:
      "Room to explore the layers, find perspective, and consider your next steps.",
    format: "Private live consultation · Up to 60 minutes",
    includes: [
      "A personal Tarot reading for layered situations",
      "A conversation guided by your priorities and available time",
    ],
    conditions:
      "Guided by priorities rather than a fixed question count. An eligible continuation can be booked separately.",
  },
  {
    id: "clarity-timing",
    title: "Clarity & Timing — Astrology + Tarot",
    purpose:
      "Two perspectives, brought together for the questions you are navigating now.",
    format: "Live consultation · Up to 45 minutes",
    includes: [
      "One birth chart and your current questions",
      "Relevant astrological timing and Tarot clarity",
      "Birth details and astrology questions required beforehand",
    ],
    conditions:
      "Does not include a full horoscope, second chart, compatibility analysis, annual forecast or follow-up.",
  },
  {
    id: "tarot-continuation",
    title: "Tarot Continuation",
    purpose: "Return to the same matter as it unfolds.",
    format: "Live consultation · Up to 30 or 60 minutes, as applicable",
    includes: [
      "Only after an eligible Live Clarity or Deep Dive reading",
      "Same matter; one continuation per original reading",
      "Must be booked and completed within 30 calendar days",
    ],
    conditions:
      "Voice readings, Astrology + Tarot and previous continuations do not qualify.",
    returning: true,
  },
];
export const astrologyServices: Service[] = [
  {
    id: "horoscope",
    title: "Complete Horoscope & Current Timing",
    purpose: "Explore your birth chart in the context of your life today.",
    format: "Live consultation · Up to 60 minutes",
    includes: [
      "One birth chart, current questions and relevant timing",
      "Accurate birth details and questions required in advance",
    ],
    conditions:
      "No second chart, compatibility analysis, written report or post-session follow-up.",
  },
  {
    id: "year-ahead",
    title: "Personal Year Ahead Forecast",
    purpose: "A considered, personal view of the twelve months ahead.",
    format: "Written report · Approximately 8–10 pages",
    includes: [
      "Twelve months from the report date, for one birth chart",
      "Personally researched themes, periods, timing and personalised remedies",
      "Delivered within seven working days after complete details",
    ],
    conditions:
      "No live session, voice explanation or follow-up. Not a full natal reading or a comprehensive month-by-month forecast for every life area.",
  },
  {
    id: "two-chart",
    title: "Two-Chart Guidance",
    purpose: "Understand a connection, or explore two individual paths.",
    format: "Live consultation · Up to 75 minutes",
    includes: [
      "A maximum of two birth charts",
      "Choose Connection Analysis OR Shared Individual Guidance before preparation; the formats cannot be combined",
      "Birth details and questions for both people required in advance",
    ],
    conditions:
      "Not two complete 60-minute readings. No written Year Ahead report or follow-up. Does not qualify for Astrology Continuation.",
  },
  {
    id: "astrology-continuation",
    title: "Astrology Continuation",
    purpose: "Revisit developments connected to your original consultation.",
    format: "Live consultation · Up to 30 minutes",
    includes: [
      "Only after the eligible full-priced one-chart live consultation",
      "Same chart and related developments; one continuation",
      "Must be booked and completed within 30 calendar days",
    ],
    conditions:
      "No new area, second chart, complete reinterpretation or Year Ahead report. Two-Chart Guidance, written Year Ahead, Astrology + Tarot and previous continuations do not qualify.",
    returning: true,
  },
];
export const faqs = [
  [
    "Which reading should I choose?",
    "Tarot readings focus on your current questions. Astrology consultations explore your birth chart and relevant timing. Clarity & Timing brings both together for one chart. If you are unsure, send Pooja a WhatsApp enquiry before choosing.",
  ],
  [
    "What birth details are required?",
    "Astrology and Astrology + Tarot consultations require accurate birth details and questions in advance. Share your date, time and place of birth when enquiring, and Pooja will confirm the details needed for your chosen service. Two-Chart Guidance requires details for both people.",
  ],
  [
    "How are consultations delivered?",
    "Choose a private live consultation, a Personal Tarot Voice Reading delivered on WhatsApp, or a written Personal Year Ahead Forecast. The format and delivery conditions are listed with each service; live-session arrangements are confirmed privately.",
  ],
  [
    "Can international clients book?",
    "International clients can enquire on WhatsApp or Instagram. Pooja will share the applicable fees, availability and payment instructions privately. Please mention your time zone when enquiring.",
  ],
  [
    "Are follow-up consultations available?",
    "Follow-up is not included. Eligible Live Clarity and Deep Dive readings can have one Tarot Continuation for the same matter. The eligible full-priced one-chart live astrology consultation can have one Astrology Continuation for related developments. Each must be booked and completed within 30 calendar days. Other offerings and previous continuations do not qualify.",
  ],
];

export const relationshipServices: Service[] = [
  {
    id: "relationship-30",
    bookingName: "Relationship Blueprint — 30-minute session",
    bookingLabel: "Enquire About This Session",
    title: "A focused conversation",
    purpose:
      "A 30-minute live Zoom session to ask your questions directly and explore an area of growth.",
    format: "30-minute session · Live on Zoom",
    includes: [
      "In-depth answers to your relationship questions",
      "Focus on a particular pattern you want to change, an area of growth, or discover where the work needs to begin",
    ],
    conditions:
      "Focused, precise and personalised. Fees and availability are shared privately.",
  },
  {
    id: "relationship-60",
    bookingName: "Relationship Blueprint — 60-minute session",
    bookingLabel: "Enquire About This Session",
    title: "Space to go deeper",
    purpose:
      "A 60-minute live Zoom session to explore what is holding you back in your relationships.",
    format: "60-minute session · Live on Zoom",
    includes: [
      "An in-depth discussion of a pattern or issue",
      "A precise strategy and plan to support change",
      "Tools to progress your growth and course-correct along the way",
    ],
    conditions:
      "A single session with space for discussion, strategy and practical next steps.",
  },
  {
    id: "relationship-package",
    bookingName: "Relationship Blueprint — four-session package",
    bookingLabel: "Enquire About This Package",
    title: "A step-by-step journey",
    purpose:
      "Four 60-minute live Zoom sessions for a deeper, structured exploration.",
    format: "Four-session package · 4 × 60 minutes · Live on Zoom",
    includes: [
      "Explore underlying issues, patterns and behaviours step by step",
      "A strategy and planning framework",
      "Exercises to help you work through the hurdles in your relationships",
    ],
    conditions:
      "The original package consists of four 60-minute sessions. Scheduling and applicable booking terms are confirmed privately.",
  },
];
