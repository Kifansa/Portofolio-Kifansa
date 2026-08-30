export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ProjectSlide {
  title: string;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  teamBadge?: string;
  summary: string;
  problem: string;
  architecture: string;
  impact: string;
  tools: string[];
  metrics: ProjectMetric[];
  slides: ProjectSlide[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "automotive-ev-bi",
    title: "Indonesia Automotive Sales & EV Adoption Intelligence System",
    category: "Strategic Business Intelligence & Market Analytics",
    badge: "Flagship BI Project",
    summary:
      "Enterprise multi-brand automotive sales intelligence system analyzing 100,000+ transaction records to track EV adoption velocity, buyer demographics, credit financing reliance, and regional dealership performance.",
    problem:
      "Indonesia's automotive landscape is experiencing an unprecedented structural shift with rapid EV penetration. Dealership networks, OEMs, and financing institutions lacked centralized intelligence to measure model-level demand, evaluate CSAT vulnerabilities, and optimize multi-province inventory.",
    architecture:
      "Engineered automated data cleaning in Python (Pandas) across 100K+ transaction rows. Built a 5-page enterprise Tableau Public dashboard featuring dynamic parameter switches, multi-dimensional drill-downs, and customer sentiment cross-tabs.",
    impact:
      "Formulated 3 executive directives: (1) Upgrade dealer service quality metrics to resolve a 3.0/5.0 CSAT plateau, (2) Deploy customized credit incentives for high-velocity EV models (BYD Dolphin/Seal/M6), and (3) Rebalance inventory toward Java and regional urban growth corridors.",
    tools: [
      "Tableau Public",
      "Python (Pandas)",
      "Exploratory Data Analysis",
      "Business Intelligence",
      "Statistical Analysis",
      "Data Wrangling",
    ],
    metrics: [
      { label: "Data Volume", value: "100K+", desc: "Transaction records modeled" },
      { label: "Gross Revenue", value: "Rp 9.46 T", desc: "Multi-brand volume analyzed" },
      { label: "Credit Reliance", value: "75%", desc: "Purchases via auto financing" },
    ],
    slides: [
      {
        title: "Executive Summary & KPIs",
        image: "/images/projects/dashboard-slide-1.webp",
        description: "Macro sales performance overview, brand market share distribution, and province-level volume mapping.",
      },
      {
        title: "Sales & Product Dynamics",
        image: "/images/projects/dashboard-slide-2.webp",
        description: "Top 10 vehicle models by sales volume, EV vs ICE comparison, and pricing distribution curves.",
      },
      {
        title: "Customer Demographics & CSAT",
        image: "/images/projects/dashboard-slide-3.webp",
        description: "Buyer age distribution, gender ratios, regional concentrations, and satisfaction benchmark analysis.",
      },
      {
        title: "Financial & Loan Tenure Analysis",
        image: "/images/projects/dashboard-slide-4.webp",
        description: "Cash vs credit ratio, loan tenure distribution (12–60 months), and dealer financing metrics.",
      },
      {
        title: "Strategic Recommendations",
        image: "/images/projects/dashboard-slide-5.webp",
        description: "Executive business directives for automotive dealerships, OEMs, and financing partners.",
      },
    ],
    liveUrl:
      "https://public.tableau.com/app/profile/kifansa.naufal.fadhlurrohman/viz/IndonesiaCarSales-Kifansa/InsightKesimpulan",
    githubUrl: "https://github.com/Kifansa",
  },
  {
    id: "bbm-sentiment-nlp",
    title: "Macro-Policy Sentiment & Big Data NLP Pipeline: Non-Subsidized Fuel Hikes",
    category: "Big Data Engineering & Machine Learning (NLP)",
    badge: "Big Data Engineering",
    teamBadge: "Collaborative Team Project (3-Contributor Squad)",
    summary:
      "End-to-end Big Data pipeline combining automated API news ingestion, YouTube comment scraping, and NLP sentiment classification to measure real-time economic public anxiety following sudden fuel price hikes in Indonesia.",
    problem:
      "Sudden price adjustments in non-subsidized fuel (Pertamax series) trigger immediate macroeconomic anxiety. Public institutions and market analysts lacked an automated, objective pipeline to measure grassroots sentiment velocity across digital discussion streams.",
    architecture:
      "Collaborated in a 3-contributor engineering team to orchestrate a complete multi-source ETL pipeline: ingested 578 news articles and discussion threads via News API and YouTube Data scraping → normalized unstructured text → trained an NLP sentiment classifier → rendered time-series reaction telemetry.",
    impact:
      "Quantified a 60.2% negative sentiment ratio (348 records) dominated by purchasing power concerns, isolated high-frequency keyword clusters ('subsidi', 'daya beli', 'pertamax'), and pinpointed secondary reaction spikes to evaluate post-announcement public discourse.",
    tools: [
      "Python",
      "NLP & Text Mining",
      "YouTube Data API",
      "Data Ingestion Pipeline",
      "Machine Learning",
      "Time-Series Telemetry",
    ],
    metrics: [
      { label: "Public Ingestion", value: "578", desc: "News & discussion records" },
      { label: "Negative Ratio", value: "60.2%", desc: "Economic anxiety benchmark" },
      { label: "Team Velocity", value: "3 Members", desc: "Cross-functional squad delivery" },
    ],
    slides: [
      {
        title: "Public Sentiment & Topic Telemetry",
        image: "/images/projects/dashboard-project-2.webp",
        description: "End-to-end sentiment distribution (60.2% negative vs 37.4% positive), keyword frequency matrix, source breakdown, and time-series reaction curves.",
      },
    ],
    githubUrl: "https://github.com/Kifansa",
  },
  {
    id: "retail-dw-predictive",
    title: "Enterprise Retail Data Warehouse & Predictive KPI Forecasting Monitor",
    category: "Cloud Data Warehousing & Predictive Analytics",
    badge: "Cloud Data Warehouse",
    teamBadge: "Collaborative Team Project (3-Contributor Squad)",
    summary:
      "Cloud-native data warehouse architecture integrating Star Schema modeling, K-Means customer segmentation, and time-series predictive sales forecasting for a multi-branch supermarket enterprise.",
    problem:
      "Enterprise retail chains operating across multi-city branches face fragmented transactional data, preventing executives from monitoring profit target realization, forecasting monthly revenue velocity, and segmenting high-value customer clusters.",
    architecture:
      "Co-engineered a cloud transactional pipeline with a 3-person team: transformed 1,000 raw sales records into a Star Schema Data Warehouse in Cloud Storage → trained time-series regression for sales trend forecasting → implemented K-Means Clustering on customer rating vs total sales volume.",
    impact:
      "Delivered an executive decision cockpit tracking $15,380.05 gross income at 90.98% target achievement across Naypyitaw, Mandalay, and Yangon branches. Identified Food & Beverage as the highest gross profit driver ($56.1K) and balanced 34.7% cash vs 34.1% e-wallet cash-flow logistics.",
    tools: [
      "Cloud Data Warehouse",
      "Star Schema Modeling",
      "K-Means Clustering",
      "Predictive Forecasting",
      "Python",
      "Executive Dashboard",
    ],
    metrics: [
      { label: "Target Realization", value: "90.98%", desc: "Gross income target achieved" },
      { label: "Gross Profit", value: "$15.38K", desc: "Multi-branch income tracked" },
      { label: "Customer Clusters", value: "K-Means", desc: "Rating vs sales volume segments" },
    ],
    slides: [
      {
        title: "Executive Monitor & Forecast Cockpit",
        image: "/images/projects/dashboard-project-3.webp",
        description: "Executive performance snapshot, sales trend forecast (actual vs predicted), branch performance benchmarks, product line efficiency, and customer cluster scatter.",
      },
    ],
    githubUrl: "https://github.com/Kifansa",
  },
];
