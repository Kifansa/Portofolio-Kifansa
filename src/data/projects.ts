export interface Project {
  title: string;
  problem: string;
  process: string;
  insight: string;
  impact: string;
  tools: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Indonesia Car Sales Analysis Dashboard",
    problem:
      "Indonesia's automotive market is rapidly evolving with the entry of new electric vehicle brands. Dealers and manufacturers need comprehensive insights into sales trends, customer demographics, financial patterns, and satisfaction levels to make data-driven strategic decisions.",
    process:
      "Sourced a public dataset from Kaggle containing 100,000+ automotive transaction records. Performed thorough data cleaning and transformation. Built a comprehensive 5-page interactive Tableau dashboard covering Executive Summary, Sales & Products, Customer Analysis, Financial Analysis, and Strategic Insights & Recommendations.",
    insight:
      "BYD dominates individual model rankings (Dolphin, M6, Atto 3, Seal) despite lower overall brand volume than Honda/Toyota — indicating strong EV preference at the model level. 75% of transactions are credit-based with evenly distributed loan tenures. Customer satisfaction is uniformly moderate (~3/5) across all brands, signaling industry-wide service improvement opportunities.",
    impact:
      "Delivered 3 actionable business recommendations: (1) Evaluate cross-brand dealer service quality to improve customer satisfaction, (2) Promote long-term financing for premium segments, (3) Expand EV product lines to capitalize on growing model-level demand.",
    tools: ["Tableau", "Data Cleaning", "Data Visualization", "Statistical Analysis"],
    images: [
      "/images/projects/dashboard-slide-1.png",
      "/images/projects/dashboard-slide-2.png",
      "/images/projects/dashboard-slide-3.png",
      "/images/projects/dashboard-slide-4.png",
      "/images/projects/dashboard-slide-5.png",
    ],
    liveUrl:
      "https://public.tableau.com/app/profile/kifansa.naufal.fadhlurrohman/viz/IndonesiaCarSales-Kifansa/InsightKesimpulan",
  },
];
