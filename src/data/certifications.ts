export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  verifyUrl?: string;
  courses?: number;
  credentialId?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    name: "Sertifikasi Kompetensi Analis Data (Data Analyst)",
    issuer: "BNSP",
    date: "Aug 2026",
    image: "/images/certs/BNSP-Data_Analyst.webp",
    credentialId: "04.0594/LSP-DKS/SRTF/VIII/2026",
    description: "National standard competency certification in professional data analytics, statistical evaluation, data cleansing, and executive dashboard reporting issued under Indonesian National Work Competency Standards (SKKNI).",
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google (via Coursera)",
    date: "Jun 2026",
    image: "/images/certs/google-advanced-data-analytics.webp",
    verifyUrl: "https://coursera.org/verify/professional-cert/ANXJMLILC9IV",
    courses: 7,
    description: "Rigorous specialization covering statistical modeling, predictive machine learning pipelines, hypothesis testing, and advanced exploratory data analysis with Python & Tableau.",
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "May 2026",
    image: "/images/certs/google-ai.webp",
    verifyUrl: "https://coursera.org/verify/professional-cert/ZOKE01X12M1V",
    courses: 7,
    description: "Comprehensive foundation in applied artificial intelligence, prompt engineering, generative machine learning applications, and ethical AI deployment for business decision systems.",
  },
  {
    name: "Google Data Analysis with Python",
    issuer: "Google (via Coursera)",
    date: "May 2026",
    image: "/images/certs/google-data-analysis-python.webp",
    verifyUrl: "https://coursera.org/verify/specialization/4ERW920KM1X2",
    courses: 6,
    description: "Focused curriculum on automated ETL workflows, scientific computing with Pandas/NumPy, statistical inference, and algorithmic data visualization.",
  },
];
