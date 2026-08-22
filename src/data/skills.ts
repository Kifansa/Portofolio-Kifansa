export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data & Analytics",
    skills: [
      "Python",
      "SQL / MySQL",
      "Jupyter Notebook",
      "Looker Studio",
      "Data Mining",
      "Data Cleaning",
      "Statistics",
      "Machine Learning",
    ],
  },
  {
    name: "Visualization",
    skills: [
      "Tableau",
      "Looker Studio",
      "Excel Charts",
      "Data Storytelling",
    ],
  },
  {
    name: "Programming",
    skills: [
      "Python",
      "Java",
      "HTML / CSS",
      "PHP",
      "React",
      "Laravel",
    ],
  },
  {
    name: "Enterprise & Tools",
    skills: [
      "SAP ERP (SCM)",
      "Git / GitHub",
      "Google Workspace",
      "Microsoft Office",
    ],
  },
];
