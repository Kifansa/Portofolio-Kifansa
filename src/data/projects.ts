export interface ProjectSlide {
  title: string;
  image: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  problem: string;
  process: string;
  insight: string;
  impact: string;
  tools: string[];
  slides: ProjectSlide[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Indonesia Automotive Sales & EV Adoption Intelligence",
    category: "Tableau BI & Strategic Data Analysis",
    problem:
      "Indonesia's automotive market is undergoing a rapid transition with the rise of Electric Vehicles (EV). Automotive manufacturers, regional dealerships, and financial partners lacked centralized intelligence to analyze multi-brand sales trends, demographic preferences, and financing behavior.",
    process:
      "Cleaned and transformed 100,000+ transaction records using Python and Excel. Built an interactive 5-page enterprise Tableau dashboard with dynamic filters, KPI parameter switching, and exploratory drill-downs across models, demographics, and credit tenures.",
    insight:
      "BYD models (Dolphin, M6, Atto 3, Seal) achieved top individual rankings despite lower total brand volume than legacy incumbents — proving strong model-level EV momentum. 75% of purchases depend on credit financing. Customer satisfaction averaged ~3.0 / 5.0 across all brands, revealing major post-sale retention opportunities.",
    impact:
      "Formulated 3 executive-ready recommendations: (1) Upgrade dealer service quality metrics to boost CSAT, (2) Deploy customized financing incentives for high-growth EV models, and (3) Rebalance regional inventory to match EV adoption velocity.",
    tools: ["Tableau Public", "Python (Pandas)", "Data Wrangling", "Exploratory Data Analysis", "Business Intelligence", "Statistical Analysis"],
    slides: [
      {
        title: "Executive Summary & KPIs",
        image: "/images/projects/dashboard-slide-1.webp",
        description: "Macro sales performance overview, brand market share, and vehicle category distribution.",
      },
      {
        title: "Sales & Product Dynamics",
        image: "/images/projects/dashboard-slide-2.webp",
        description: "Top 10 vehicle models by sales volume, EV vs ICE comparison, and pricing distribution.",
      },
      {
        title: "Customer Demographics",
        image: "/images/projects/dashboard-slide-3.webp",
        description: "Buyer age breakdown, gender ratio, geographic concentration, and satisfaction ratings.",
      },
      {
        title: "Financial & Payment Analysis",
        image: "/images/projects/dashboard-slide-4.webp",
        description: "Cash vs credit ratio, loan tenure distribution (12 to 60 months), and dealer finance metrics.",
      },
      {
        title: "Strategic Recommendations",
        image: "/images/projects/dashboard-slide-5.webp",
        description: "Data-driven business decisions for dealerships, OEMs, and financing institutions.",
      },
    ],
    liveUrl:
      "https://public.tableau.com/app/profile/kifansa.naufal.fadhlurrohman/viz/IndonesiaCarSales-Kifansa/InsightKesimpulan",
    githubUrl: "https://github.com/Kifansa",
  },
];
