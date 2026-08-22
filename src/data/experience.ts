export interface Experience {
  title: string;
  organization: string;
  period: string;
  type: "work" | "organization";
  highlights: string[];
}

export const experiences: Experience[] = [
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
      "Delivered practical instruction on SAP software using the SAP SCM 500 professional certification module.",
      "Guided students in mapping logistics operations, manufacturing frameworks, and ERP-driven supply chain workflows.",
    ],
  },
  {
    title: "Vice Director of Logistics Marketing Crew",
    organization: "Telkom University Surabaya",
    period: "Dec 2024 – Aug 2025",
    type: "organization",
    highlights: [
      "Supervised logistics for managing high-value institutional assets, inventory control, and documentation for university campaigns.",
      "Coordinated mobilization of promotional equipment for open house events, school roadshows, and digital media production.",
    ],
  },
  {
    title: "Teaching Assistant — Object-Oriented Programming",
    organization: "Telkom University Surabaya",
    period: "Mar 2025 – Jun 2025",
    type: "work",
    highlights: [
      "Mentored students through core Java OOP architectures, conducted code reviews, and provided hands-on troubleshooting.",
    ],
  },
  {
    title: "Research Assistant — Community Engagement Project",
    organization: "Telkom University Surabaya",
    period: "Dec 2024 – Apr 2025",
    type: "work",
    highlights: [
      "Contributed to a digital transformation research project for the MSME sector, overseeing data collection and documentation.",
      "Co-authored an academic journal on IT literacy training for MSME productivity optimization.",
    ],
  },
  {
    title: "Head of Committee — Tech Up Bootcamp",
    organization: "IMSII at BPSDMP Kominfo Surabaya",
    period: "Nov 2024",
    type: "organization",
    highlights: [
      "Directed end-to-end planning and execution of an intensive offline digital bootcamp.",
      "Coordinated cross-functional committees and managed stakeholder relations.",
    ],
  },
  {
    title: "Website Content Writer",
    organization: "IS Department, Telkom University Surabaya",
    period: "Feb 2024 – Present",
    type: "work",
    highlights: [
      "Authored high-engagement articles and departmental press releases for the official web portal.",
      "Translated complex technical concepts into accessible public narratives.",
    ],
  },
];
