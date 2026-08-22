export interface Experience {
  title: string;
  organization: string;
  period: string;
  type: "work" | "organization";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Website Content Writer",
    organization: "IS Department, Telkom University Surabaya",
    period: "Feb 2024 – Present",
    type: "work",
    highlights: [
      "Authored high-engagement analytical articles and departmental press releases for the official web portal.",
      "Translated complex technical and data concepts into clear, accessible public narratives.",
    ],
  },
  {
    title: "Teaching Assistant — Data Mining",
    organization: "Telkom University Surabaya",
    period: "Mar 2026 – May 2026",
    type: "work",
    highlights: [
      "Coached students through end-to-end data mining lifecycles: data preparation, predictive modeling, and model deployment.",
      "Facilitated practical lab sessions to transform raw datasets into actionable data insights.",
    ],
  },
  {
    title: "Teaching Assistant — Supply Chain Management",
    organization: "Telkom University Surabaya",
    period: "Mar 2026 – May 2026",
    type: "work",
    highlights: [
      "Delivered practical instruction on enterprise resource planning and supply chain analytics modules.",
      "Guided students in mapping logistics operations, manufacturing frameworks, and ERP-driven workflows.",
    ],
  },
  {
    title: "Vice Director of Logistics Marketing Crew",
    organization: "Telkom University Surabaya",
    period: "Dec 2024 – Aug 2025",
    type: "organization",
    highlights: [
      "Supervised logistics data for managing high-value institutional assets, inventory control, and campaign tracking.",
      "Coordinated mobilization of promotional equipment for open house events, roadshows, and digital production.",
    ],
  },
  {
    title: "Teaching Assistant — Object-Oriented Programming",
    organization: "Telkom University Surabaya",
    period: "Mar 2025 – Jun 2025",
    type: "work",
    highlights: [
      "Mentored students through core Java OOP architectures, conducted code reviews, and provided debugging guidance.",
    ],
  },
  {
    title: "Research Assistant — Community Engagement Project",
    organization: "Telkom University Surabaya",
    period: "Dec 2024 – Apr 2025",
    type: "work",
    highlights: [
      "Contributed to MSME digital transformation research, overseeing survey data collection and quantitative analysis.",
      "Co-authored an academic journal on IT literacy and digital productivity optimization.",
    ],
  },
  {
    title: "Head of Committee — Tech Up Bootcamp",
    organization: "IMSII at BPSDMP Kominfo Surabaya",
    period: "Nov 2024",
    type: "organization",
    highlights: [
      "Directed end-to-end planning and execution of an intensive offline digital skills bootcamp.",
      "Coordinated cross-functional committees and managed institutional stakeholder relations.",
    ],
  },
];
