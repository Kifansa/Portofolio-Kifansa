export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  verifyUrl?: string;
  courses?: number;
}

export const certifications: Certification[] = [
  {
    name: "Google Advanced Data Analytics",
    issuer: "Coursera (Google)",
    date: "Jun 2026",
    image: "/images/certs/google-advanced-data-analytics.png",
    verifyUrl: "https://coursera.org/verify/professional-cert/ANXJMLILC9IV",
    courses: 7,
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Coursera (Google)",
    date: "May 2026",
    image: "/images/certs/google-ai.png",
    verifyUrl: "https://coursera.org/verify/professional-cert/ZOKE01X12M1V",
    courses: 7,
  },
  {
    name: "Google Data Analysis with Python",
    issuer: "Coursera (Google)",
    date: "May 2026",
    image: "/images/certs/google-data-analysis-python.png",
    verifyUrl: "https://coursera.org/verify/specialization/4ERW920KM1X2",
    courses: 6,
  },
  {
    name: "SAP Certified SCM500: Business Processes in Procurement",
    issuer: "Edugate Indonesia",
    date: "2025",
  },
  {
    name: "SAP Certified SCM100: Business Processes in Planning",
    issuer: "Edugate Indonesia",
    date: "2025",
  },
];
