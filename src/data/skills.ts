export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: "code" | "chart" | "database" | "briefcase";
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "data-science",
    name: "Data Science & Machine Learning",
    subtitle: "Algorithmic modeling, exploratory data analysis & automated pipelines",
    icon: "code",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Scikit-Learn", icon: "scikit" },
      { name: "Jupyter Notebook", icon: "jupyter" },
      { name: "Exploratory Data Analysis", icon: "eda" },
      { name: "Statistical Modeling", icon: "stats" },
    ],
  },
  {
    id: "bi-visualization",
    name: "Business Intelligence & Visualization",
    subtitle: "Enterprise dashboards, interactive KPI tracking & executive reporting",
    icon: "chart",
    skills: [
      { name: "Tableau Public", icon: "tableau" },
      { name: "Microsoft Power BI", icon: "powerbi" },
      { name: "Google Looker Studio", icon: "datastudio" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Interactive Dashboards", icon: "dashboard" },
      { name: "Executive Storytelling", icon: "storytelling" },
    ],
  },
  {
    id: "databases-engineering",
    name: "Databases & Analytics Engineering",
    subtitle: "Relational data structuring, query optimization & version control",
    icon: "database",
    skills: [
      { name: "SQL (Postgres & MySQL)", icon: "sql" },
      { name: "Database Architecture", icon: "dbmodel" },
      { name: "R Programming", icon: "r" },
      { name: "Java", icon: "java" },
      { name: "Git & GitHub", icon: "github" },
      { name: "HTML5 & CSS3", icon: "htmlcss" },
    ],
  },
  {
    id: "strategy-impact",
    name: "Analytics Strategy & Business Impact",
    subtitle: "Translating data insights into commercial ROI & optimized workflows",
    icon: "briefcase",
    skills: [
      { name: "A/B Testing & Metrics", icon: "abtest" },
      { name: "KPI & Metrics Frameworks", icon: "kpi" },
      { name: "Process Optimization", icon: "process" },
      { name: "Stakeholder Presentations", icon: "presentation" },
      { name: "Agile Analytics Delivery", icon: "agile" },
    ],
  },
];
