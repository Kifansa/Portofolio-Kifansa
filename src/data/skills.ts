export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis & ML",
    icon: "database",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL (Postgres/MySQL)", icon: "sql" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Scikit-Learn", icon: "scikit" },
      { name: "Jupyter Notebook", icon: "jupyter" },
      { name: "Exploratory Data Analysis", icon: "eda" },
      { name: "Statistical Modeling", icon: "stats" },
    ],
  },
  {
    name: "BI & Visualization",
    icon: "chart",
    skills: [
      { name: "Tableau", icon: "tableau" },
      { name: "Microsoft Power BI", icon: "powerbi" },
      { name: "Data Studio", icon: "datastudio" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Interactive Dashboards", icon: "dashboard" },
      { name: "Executive Storytelling", icon: "storytelling" },
    ],
  },
  {
    name: "Programming & Tools",
    icon: "code",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL Querying", icon: "sql" },
      { name: "Java", icon: "java" },
      { name: "R Language", icon: "r" },
      { name: "Git & GitHub", icon: "github" },
      { name: "HTML & CSS", icon: "htmlcss" },
    ],
  },
  {
    name: "Business & Strategy",
    icon: "briefcase",
    skills: [
      { name: "Business Intelligence", icon: "bi" },
      { name: "A/B Testing & Metrics", icon: "abtest" },
      { name: "Process Optimization", icon: "process" },
      { name: "Presentations", icon: "presentation" },
      { name: "Cross-Functional Agile", icon: "agile" },
    ],
  },
];
