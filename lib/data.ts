// Free resource library — PDFs served directly from /public/resources.
// Source files live in the owner's "Free Resources" folder; the Internal
// folder is deliberately excluded.

export type ResourceCategory =
  | "Career & Roadmaps"
  | "Fundamentals"
  | "Automation & Playwright"
  | "AI for QA"
  | "Interview & Hiring";

export const resourceCategories: ResourceCategory[] = [
  "Career & Roadmaps",
  "Fundamentals",
  "Automation & Playwright",
  "AI for QA",
  "Interview & Hiring",
];

export interface FreeResource {
  title: string;
  description: string;
  file: string; // path under /public
  badge: string;
  category: ResourceCategory;
  size: string;
}

export const freeResources: FreeResource[] = [
  // ---- Career & Roadmaps ----
  {
    title: "Become a Software Tester Roadmap 2026",
    description:
      "The exact order to learn QA from zero — fundamentals, tools, proof of work, automation and the job hunt. Includes a 30-day starter plan and a job-readiness checklist.",
    file: "/resources/become-a-software-tester-roadmap-2026.pdf",
    badge: "Roadmap",
    category: "Career & Roadmaps",
    size: "36 KB",
  },
  {
    title: "Test Automation Roadmap 2026",
    description:
      "What to learn, what to skip and what actually gets you hired — Playwright, TypeScript, test design and AI-assisted testing, without wasting months on the wrong tools.",
    file: "/resources/test-automation-roadmap-2026.pdf",
    badge: "Roadmap",
    category: "Career & Roadmaps",
    size: "38 KB",
  },
  {
    title: "QA Skills Framework Roadmap",
    description:
      "The modern QA career path — from Foundation Tester to AI-Enabled Quality Engineer and Quality Leader — with the core skills and evidence to build at each level.",
    file: "/resources/qa-skills-framework-roadmap.pdf",
    badge: "Framework",
    category: "Career & Roadmaps",
    size: "130 KB",
  },
  {
    title: "90-Day QA Career Accelerator",
    description:
      "A structured 90-day plan to break into software testing — real skills, practical examples and interview focus, built for beginners and career changers.",
    file: "/resources/90-day-qa-career-accelerator.pdf",
    badge: "Roadmap",
    category: "Career & Roadmaps",
    size: "3.9 MB",
  },
  {
    title: "QA Salary Guide 2026",
    description:
      "QA salary benchmarks across manual, automation and leadership roles — so you know your worth and can negotiate from evidence in 2026.",
    file: "/resources/qa-salary-guide-2026.pdf",
    badge: "Guide",
    category: "Career & Roadmaps",
    size: "2.3 MB",
  },

  // ---- Fundamentals ----
  {
    title: "Software Testing Starter Pack (2026)",
    description:
      "The beginner's guide to starting a QA career — what testing really is, manual vs automation, the STLC, non-functional testing, and how to land your first role.",
    file: "/resources/software-testing-starter-pack-2026.pdf",
    badge: "Guide",
    category: "Fundamentals",
    size: "3.9 MB",
  },
  {
    title: "Writing a Good Test Case",
    description:
      "A practical beginner guide: the seven parts of a strong test case, a worked example, and the common mistakes that make test cases useless.",
    file: "/resources/writing-a-good-test-case-guide.pdf",
    badge: "Guide",
    category: "Fundamentals",
    size: "3.3 MB",
  },

  // ---- Automation & Playwright ----
  {
    title: "Automation Decision Checklist 2026",
    description:
      "Decide what's actually worth automating using a simple frequency × risk matrix — before you write a single Playwright test. Keep your suite lean and valuable.",
    file: "/resources/automation-decision-checklist-2026.pdf",
    badge: "Checklist",
    category: "Automation & Playwright",
    size: "29 KB",
  },
  {
    title: "Playwright Framework Health Check 2026",
    description:
      "A five-minute structural audit of your Playwright suite — spot what quietly breaks at scale, from repeated locators to test data welded into tests.",
    file: "/resources/playwright-framework-health-check-2026.pdf",
    badge: "Checklist",
    category: "Automation & Playwright",
    size: "29 KB",
  },

  // ---- AI for QA ----
  {
    title: "AI Workflow Prompt Pack for QA (2026)",
    description:
      "Ready-to-use AI prompts and workflows for requirements analysis, test design, API testing, debugging and risk-based testing — to accelerate your thinking, not replace it.",
    file: "/resources/ai-workflow-prompt-pack-2026.pdf",
    badge: "Prompt Pack",
    category: "AI for QA",
    size: "83 KB",
  },
  {
    title: "AI Prompt Pack for Exploratory Testing",
    description:
      "Prompts to use AI as a thinking partner during exploratory sessions — to find real bugs and sharpen your charters, not just run more tests.",
    file: "/resources/ai-exploratory-testing-prompt-pack.pdf",
    badge: "Prompt Pack",
    category: "AI for QA",
    size: "6.6 MB",
  },

  // ---- Interview & Hiring ----
  {
    title: "Playwright Interview Cheat Sheet 2026",
    description:
      "The five questions hiring managers use to tell whether you really know Playwright — with strong vs weak answers, and the thinking behind each one.",
    file: "/resources/playwright-interview-cheat-sheet-2026.pdf",
    badge: "Cheat Sheet",
    category: "Interview & Hiring",
    size: "29 KB",
  },
  {
    title: "The 5-Point QA Hiring Framework",
    description:
      "25 years of hiring decisions distilled into one scorecard — the five lenses that earn a 'yes' in a QA interview, with the red and green flags for each.",
    file: "/resources/5-point-qa-hiring-framework.pdf",
    badge: "Framework",
    category: "Interview & Hiring",
    size: "209 KB",
  },
  {
    title: "QA CV Checklist",
    description:
      "A practical checklist to get your QA CV past screening — what to show, what to cut, and how to evidence real testing ability rather than just list tools.",
    file: "/resources/qa-cv-checklist.pdf",
    badge: "Checklist",
    category: "Interview & Hiring",
    size: "2.3 MB",
  },
];
