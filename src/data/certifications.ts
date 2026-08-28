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
    issuer: "Google (via Coursera)",
    date: "Jun 2026",
    image: "/images/certs/google-advanced-data-analytics.webp",
    verifyUrl: "https://coursera.org/verify/professional-cert/ANXJMLILC9IV",
    courses: 7,
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "May 2026",
    image: "/images/certs/google-ai.webp",
    verifyUrl: "https://coursera.org/verify/professional-cert/ZOKE01X12M1V",
    courses: 7,
  },
  {
    name: "Google Data Analysis with Python",
    issuer: "Google (via Coursera)",
    date: "May 2026",
    image: "/images/certs/google-data-analysis-python.webp",
    verifyUrl: "https://coursera.org/verify/specialization/4ERW920KM1X2",
    courses: 6,
  },
];
