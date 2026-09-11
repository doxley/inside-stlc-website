// Client / engagement data for the Clients page.
// Sourced from the founder's delivery record (QA lead / test management across
// government, finance, retail, gaming, logistics and public-sector digital).
//
// To use a real logo image instead of the styled wordmark, drop a file into
// public/clients/<slug>.svg (or .png) and set `logo: "/clients/<slug>.svg"`.
// The logo wall falls back to the branded monogram + wordmark when `logo` is unset.

export interface Client {
  slug: string;
  name: string;
  monogram: string;
  sector: string;
  period: string;
  role: string;
  summary: string;
  involved: string[];
  tags: string[];
  accent: "blue" | "green";
  featured?: boolean;
  logo?: string; // optional path to a real logo asset in /public
}

export const clients: Client[] = [
  {
    slug: "staffline",
    logo: "/clients/staffline.png",
    name: "Staffline",
    monogram: "S",
    sector: "Recruitment & Workforce",
    period: "2024 – 2025",
    role: "Test Lead — Finance & Payroll Systems",
    summary:
      "QA leadership for the implementation of new finance and payroll systems across the Staffline ecosystem.",
    involved: [
      "Test strategy, plans and cases across functional, non-functional and integration testing",
      "Data migration validation for payroll, finance and business reporting",
      "Integration and UAT phases — environments, business-user coaching, results validation",
      "A defect process spanning suppliers, developers and business stakeholders",
    ],
    tags: ["Finance Systems", "Data Migration", "UAT"],
    accent: "blue",
  },
  {
    slug: "lexisnexis-risk",
    logo: "/clients/lexisnexis-risk.png",
    name: "LexisNexis Risk",
    monogram: "LN",
    sector: "Risk, Data & Analytics",
    period: "2024",
    role: "Test Manager",
    summary:
      "Reworked the department's test strategy and led an automation and non-functional testing uplift.",
    involved: [
      "Test strategy rework across automation, performance and shift-left testing",
      "Roll-out of a new Cucumber / Java automation framework for an Angular project",
      "Non-functional testing within delivery cycles, including performance and security approach",
      "Process improvement and best-practice adoption across the team",
    ],
    tags: ["Automation Framework", "Performance", "Shift-Left"],
    accent: "blue",
  },
  {
    slug: "informed-solutions",
    logo: "/clients/informed-solutions.png",
    name: "Informed Solutions",
    monogram: "IS",
    sector: "Public Sector Digital",
    period: "2020 – 2024",
    role: "Test Manager — Clean Air Zone Programme",
    summary:
      "Owned test strategy and delivery for the Clean Air Zone programme across nine UK cities.",
    involved: [
      "Automated and manual test frameworks (Selenium, Cucumber, Ruby, JMeter) in AWS",
      "UAT with local authorities and third-party suppliers (ANPR, enforcement)",
      "Feature demonstrations and release approvals with end-users",
      "CI/CD testing embedded in Agile delivery, across onshore and offshore testers",
    ],
    tags: ["Public Sector", "AWS", "CI/CD"],
    accent: "green",
  },
  {
    slug: "dwp",
    logo: "/clients/dwp.png",
    name: "Dept. for Work & Pensions",
    monogram: "DWP",
    sector: "Central Government",
    period: "2016 – 2020",
    role: "Test Manager — Digital Transformation",
    summary:
      "Led QA for multiple digital transformation projects, including identity and access management and Azure web apps.",
    involved: [
      "Identity & Access Management (ForgeRock) and Azure-based web application testing",
      "BDD frameworks (Cucumber / Gherkin / Selenium) and TDD practices",
      "A reusable QA documentation library shared across teams",
      "CI/CD automation (AWS, Jenkins) with non-functional and accessibility testing",
    ],
    tags: ["Identity & Access", "Accessibility", "BDD"],
    accent: "blue",
  },
  {
    slug: "evri",
    logo: "/clients/evri.png",
    name: "Evri",
    monogram: "E",
    sector: "Logistics & Delivery",
    period: "2015 – 2016",
    role: "Test Lead",
    summary:
      "Led QA for a large-scale API integration with eBay and internal delivery applications.",
    involved: [
      "API integration testing with eBay, with automated frameworks using apickli (Cucumber.js)",
      "UAT and manual / automated testing for internal Java and Vue.js applications",
      "Selenium WebDriver automation across web journeys",
    ],
    tags: ["API Integration", "eBay", "Automation"],
    accent: "green",
  },
  {
    slug: "sky-betting-gaming",
    logo: "/clients/sky-betting-gaming.png",
    name: "Sky Betting & Gaming",
    monogram: "SB",
    sector: "Gaming & Betting (Regulated)",
    period: "2015",
    role: "Automation Test Lead",
    summary:
      "Directed the testing strategy for international sportsbook and casino launches in a regulated environment.",
    involved: [
      "Testing strategy for international sportsbook and casino launches",
      "Automation frameworks built with Cucumber and Selenium",
      "UAT leadership across launch programmes",
      "Regulatory compliance testing, including PCI",
    ],
    tags: ["Regulated", "PCI", "Launch Testing"],
    accent: "blue",
  },
];

// Sectors summarised for the "breadth" strip.
export const clientSectors = [
  "Central Government",
  "Public Sector Digital",
  "Finance & Payroll",
  "Risk & Data Analytics",
  "Gaming & Betting",
  "Logistics & Delivery",
];
