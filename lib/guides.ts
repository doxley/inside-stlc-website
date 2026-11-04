// Long-form, indexable guide articles built from the free resources.
// Each guide keeps its companion PDF as a download, and links out to the
// relevant services and related guides for internal link equity.

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { label: string; detail: string }[] }
  | { type: 'contrast'; weak: string; strong: string; testing: string };

export interface GuideSection {
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  category: string;
  /** H1 on the page. */
  title: string;
  /** <title> for SEO (can differ from H1). */
  metaTitle: string;
  /** Meta description / summary. */
  description: string;
  readTime: string;
  updated: string;
  /** Lead paragraphs under the H1. */
  intro: string[];
  sections: GuideSection[];
  keyTakeaways: string[];
  faqs: GuideFaq[];
  pdf?: { label: string; file: string; size: string };
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  relatedSlugs: string[];
}

export const GUIDES: Guide[] = [
  // ------------------------------------------------------------------
  {
    slug: 'how-to-become-a-software-tester',
    category: 'Career & Roadmaps',
    title: 'How to Become a Software Tester in 2026 (No Experience Needed)',
    metaTitle: 'How to Become a Software Tester in 2026 (No Experience Needed)',
    description:
      'A practical, step-by-step roadmap into software testing from zero — what to learn, in what order, the tools that matter, and how to prove you can test. No computer science degree required.',
    readTime: '9 min read',
    updated: '2026',
    intro: [
      'Two people can spend the same twelve months learning software testing and finish in completely different positions. The difference is rarely talent or certifications — it is sequence. Learn the right things in the right order and you build momentum; learn them in the wrong order and you waste a year collecting tools and courses that never turn into a job.',
      'This guide is the exact order I would learn QA from zero in 2026, drawn from 26+ years of testing, hiring and leading QA teams. There is no degree, no coding background and no expensive certification required to begin — just a clear path and the discipline to produce evidence as you go.',
    ],
    sections: [
      {
        heading: 'What you do NOT need to start',
        blocks: [
          {
            type: 'p',
            text: 'The entry point into QA has moved, and a lot of advice online is still built for a 2019 job market. Before you spend money or months on the wrong thing, know what is genuinely optional at the start:',
          },
          {
            type: 'list',
            items: [
              'A computer science degree.',
              'A coding background.',
              'Ten different testing tools on your CV.',
              'Months of certification study before you have tested anything.',
              'Advanced automation before you understand testing fundamentals.',
            ],
          },
        ],
      },
      {
        heading: 'What employers actually need to see',
        blocks: [
          {
            type: 'p',
            text: "Hiring managers are not looking for someone who can recite definitions. They are looking for someone who can think about a product and communicate clearly. In practice, that means you can show the following:",
          },
          {
            type: 'list',
            items: [
              'You can think critically about a product and spot what might go wrong.',
              'You can describe a problem clearly, in writing and out loud.',
              'You understand the basic language of modern software delivery.',
              'You can actually use common testing tools — not merely list them.',
              'You can show proof that you have practised testing.',
            ],
          },
        ],
      },
      {
        heading: 'The 2026 roadmap at a glance',
        blocks: [
          {
            type: 'steps',
            items: [
              { label: 'Testing fundamentals', detail: 'Learn the craft, then write useful tests and bug reports.' },
              { label: 'Modern delivery language', detail: 'Understand Agile, user stories, sprints and CI/CD.' },
              { label: 'Core tools', detail: 'Get hands-on with Jira, Postman and browser developer tools.' },
              { label: 'Proof of work', detail: 'Package your practice into a small, credible QA portfolio.' },
              { label: 'Automation basics', detail: 'Read and build simple Playwright tests once your foundations are solid.' },
              { label: 'Targeted applications', detail: 'Apply with evidence, not a generic CV sent everywhere.' },
            ],
          },
        ],
      },
      {
        heading: 'Step 1 — Learn the craft before the tools',
        blocks: [
          {
            type: 'p',
            text: 'Give this a focused weekend, not three months. You are building the mental model that every tool and technique will later sit on. Concentrate on how testers think, not on software yet:',
          },
          {
            type: 'list',
            items: [
              'What software testing is — and, just as importantly, what it is not.',
              'Test cases, test scenarios and expected results.',
              'Defects: severity, priority, reproducibility and evidence.',
              'Verification vs validation, and functional vs non-functional testing.',
              'Positive, negative and boundary thinking.',
              'Why testing is about risk and information, not proving software is perfect.',
            ],
          },
          {
            type: 'p',
            text: 'Mini-project: pick a website you know well. Write ten test scenarios and three high-quality bug reports or improvement observations. That single exercise teaches more than a week of passive tutorials.',
          },
        ],
      },
      {
        heading: 'Step 2 — Speak the language of the team',
        blocks: [
          {
            type: 'p',
            text: 'Testers work inside delivery teams, so you need the vocabulary those teams use every day. You do not need to be an expert — you need to never look lost in a stand-up:',
          },
          {
            type: 'list',
            items: [
              'Agile and iterative delivery; sprints, backlogs, refinement and retrospectives.',
              'User stories, acceptance criteria and the Definition of Done.',
              'Basic SDLC and STLC concepts.',
              'What CI/CD means and why fast feedback matters.',
              'The roles of developer, product owner, business analyst and QA.',
            ],
          },
        ],
      },
      {
        heading: 'Step 3 — Learn a small core toolset',
        blocks: [
          {
            type: 'p',
            text: 'Depth beats breadth. You are not trying to collect logos for your CV — you are trying to be genuinely useful in a handful of tools employers actually use:',
          },
          {
            type: 'steps',
            items: [
              { label: 'Test management & defects', detail: 'Jira or similar — stories, defects, workflow and evidence.' },
              { label: 'API testing', detail: 'Postman — GET/POST, status codes, JSON and auth basics.' },
              { label: 'Browser investigation', detail: 'Developer Tools — network, console, elements and requests.' },
              { label: 'Automation', detail: 'Playwright — simple, readable tests once your foundations are ready.' },
              { label: 'Data', detail: 'SQL basics — SELECT, WHERE, JOIN and validation thinking.' },
            ],
          },
        ],
      },
      {
        heading: 'Step 4 — Build proof of work',
        blocks: [
          {
            type: 'p',
            text: 'Reading is not experience. Your first portfolio does not need to be enormous; it needs to show how you think. A strong entry-level portfolio includes:',
          },
          {
            type: 'list',
            items: [
              'A short test approach for one website or demo application.',
              '15–25 well-written test scenarios or cases.',
              'Five example defect reports with clear, reproducible evidence.',
              'A Postman collection covering a small public or demo API.',
              'A simple SQL or data-validation exercise.',
              'Later: a small Playwright suite with a handful of meaningful tests.',
              'A README explaining what you tested, the risks you found and what you learned.',
            ],
          },
        ],
      },
      {
        heading: 'Step 5 — Add automation at the right time',
        blocks: [
          {
            type: 'p',
            text: 'Automation is a multiplier, not a starting point. Add it once you can test well manually, so you automate the right things for the right reasons:',
          },
          {
            type: 'list',
            items: [
              'Understand why repetitive, stable checks are the best automation candidates.',
              'Learn to read a simple test script before worrying about framework architecture.',
              'Use Playwright as a modern starting point for browser automation.',
              'Pick up basic TypeScript or JavaScript alongside it.',
              'Use AI to explain, scaffold and debug — but never submit code you cannot explain.',
              'Keep your exploratory and human-judgement skills sharp alongside automation.',
            ],
          },
        ],
      },
      {
        heading: 'The three mistakes that waste a year',
        blocks: [
          {
            type: 'list',
            items: [
              'Starting with certification. Theory has little context before you have tested anything — learn the fundamentals, practise, then decide whether ISTQB suits you.',
              'No proof of work. A CV that only makes claims gives employers nothing to inspect. Build one small, polished portfolio instead.',
              'Applying too early and everywhere. Generic applications create rejection without useful feedback. Become genuinely job-ready, then target suitable roles carefully.',
            ],
          },
        ],
      },
      {
        heading: 'Your first 30 days',
        blocks: [
          {
            type: 'steps',
            items: [
              { label: 'Week 1 — Fundamentals', detail: 'Ten test scenarios plus three example defects.' },
              { label: 'Week 2 — Delivery language & tools', detail: 'Use a Jira-style workflow, DevTools and Postman.' },
              { label: 'Week 3 — Proof of work', detail: 'Package your testing into a simple portfolio.' },
              { label: 'Week 4 — Job readiness', detail: 'CV, LinkedIn, interview examples and your first targeted applications.' },
            ],
          },
          {
            type: 'p',
            text: 'Consistency beats intensity. One useful piece of work every day is worth more than a weekend of tutorials you never apply.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Sequence matters more than talent — learn fundamentals before tools, and tools before automation.',
      'You do not need a degree, a coding background or a certification to start.',
      'Employers hire evidence: a small, well-explained portfolio beats a long list of claims.',
      'Add automation once you can test well manually, so you automate the right things.',
    ],
    faqs: [
      {
        q: 'Do I need a degree to become a software tester?',
        a: 'No. A computer science degree is not required to start in QA. Employers care far more that you can think critically about a product, communicate clearly and show evidence that you can test. A small portfolio demonstrating real practice carries more weight than a degree for most entry-level testing roles.',
      },
      {
        q: 'How long does it take to become a software tester?',
        a: 'With focused, consistent effort you can become genuinely job-ready in a few months rather than a year. The 30-day plan in this guide gets you from fundamentals to a portfolio and your first targeted applications; the key is producing one useful piece of work each day rather than bingeing tutorials.',
      },
      {
        q: 'Do I need to learn to code to get into QA?',
        a: 'Not to begin. You can enter QA through strong manual and exploratory testing, tool fluency (Jira, Postman, developer tools) and clear communication. Basic scripting in TypeScript or JavaScript becomes valuable once you move into automation with a tool like Playwright — but that is step five, not step one.',
      },
      {
        q: 'Is the ISTQB certification worth it for beginners?',
        a: 'It can be useful, but not as your first move. Certifications have little context before you have actually tested something. Learn the fundamentals, practise them, build a portfolio, and then decide whether a certification such as ISTQB Foundation adds value for the roles you are targeting.',
      },
    ],
    pdf: {
      label: 'Become a Software Tester Roadmap 2026 (PDF)',
      file: '/resources/become-a-software-tester-roadmap-2026.pdf',
      size: '36 KB',
    },
    cta: {
      heading: 'Want the full, structured path?',
      body: 'Inside STLC Academy turns this roadmap into a guided programme — with lessons, worked examples and a portfolio project that gets you job-ready.',
      primaryLabel: 'Explore Inside STLC Academy',
      primaryHref: 'https://www.insidestlcacademy.com/',
      secondaryLabel: 'See all free resources',
      secondaryHref: '/resources',
    },
    relatedSlugs: ['playwright-interview-questions', 'ai-prompts-for-qa-engineers'],
  },

  // ------------------------------------------------------------------
  {
    slug: 'playwright-interview-questions',
    category: 'Interview & Hiring',
    title: 'Playwright Interview Questions: 5 Questions Hiring Managers Really Ask',
    metaTitle: 'Playwright Interview Questions (5 Questions + Strong Answers)',
    description:
      'The five Playwright interview questions hiring managers use to tell whether you understand automation engineering — with weak vs strong answers and the thinking behind each one.',
    readTime: '7 min read',
    updated: '2026',
    intro: [
      'Most Playwright interview answers fail for the same reason: they describe what the tool does instead of why you made a decision. Hiring managers already know what Playwright does. What they want to know is whether you can make sound engineering choices, address risk, and give the delivery team reliable feedback.',
      'Below are the five questions I have used — and seen used — to separate people who have run Playwright from people who understand automation engineering. For each, there is a weak answer to avoid, a strong answer that shows judgement, and what the interviewer is really testing.',
    ],
    sections: [
      {
        heading: 'The answer formula',
        blocks: [
          {
            type: 'p',
            text: 'Before the questions, here is the structure that makes any automation answer land. Use it as a thinking tool, not a script to memorise:',
          },
          {
            type: 'steps',
            items: [
              { label: 'Give your decision', detail: 'State the choice you would make, clearly and without hedging.' },
              { label: 'Explain the reason', detail: 'Say why — the trade-off you weighed.' },
              { label: 'Connect it to risk, stability or feedback', detail: 'Tie the choice to delivery outcomes the team cares about.' },
              { label: 'Give a real example', detail: 'Ground it in something you actually did.' },
            ],
          },
          {
            type: 'p',
            text: 'Commands show tool knowledge. Trade-offs show engineering judgement — and judgement is what gets hired.',
          },
        ],
      },
      {
        heading: 'Q1. Why Playwright over Selenium?',
        blocks: [
          {
            type: 'contrast',
            weak: '"Playwright is faster and more modern."',
            strong:
              '"I choose based on context. For a modern web application, Playwright gives me auto-waiting, strong browser isolation, parallel execution, combined API and UI capabilities, and straightforward CI/CD integration. Selenium is still valid, especially in established or legacy ecosystems. I\'d pick the tool that reduces maintenance risk and fits the team."',
            testing: 'Can you make a technology decision rather than repeat a tool comparison?',
          },
        ],
      },
      {
        heading: 'Q2. Walk me through your Playwright framework',
        blocks: [
          {
            type: 'contrast',
            weak: 'A flat list of folders, Page Objects and libraries.',
            strong:
              '"I structure around feedback and maintainability. I separate fast critical checks from broader regression, keep reusable setup and test data out of individual tests, use fixtures where they add value, and tag tests so CI can run the right pack at the right point. The structure should make change cheap and failures easy to diagnose."',
            testing: 'Do you understand why framework structure exists, not just what it contains?',
          },
        ],
      },
      {
        heading: 'Q3. How do you handle flaky tests?',
        blocks: [
          {
            type: 'contrast',
            weak: '"I add retries and re-run it until it passes."',
            strong:
              '"I investigate the cause first: timing, unstable selectors, shared state, test data, environment, or a genuine product issue. I use Playwright traces and evidence to isolate the test and remove the root cause. If a low-value test stays unreliable, I\'d quarantine it temporarily and make the risk visible rather than letting red tests become normal."',
            testing: 'Do you debug like a quality engineer, or hide failures?',
          },
        ],
      },
      {
        heading: 'Q4. How do you use API testing with Playwright?',
        blocks: [
          {
            type: 'contrast',
            weak: '"I only use Playwright for UI tests."',
            strong:
              '"I use API calls where they give faster, more stable setup or verification. For example, create test data through an API, exercise the critical user behaviour in the UI, then verify the result at the most appropriate layer. I avoid forcing every check through the browser when a lower layer gives better feedback."',
            testing: 'Can you design efficient tests across layers, not just through the UI?',
          },
        ],
      },
      {
        heading: 'Q5. How do you use AI in test automation?',
        blocks: [
          {
            type: 'contrast',
            weak: '"AI writes my Playwright tests for me."',
            strong:
              '"I use AI to accelerate boilerplate, generate test ideas, explain unfamiliar code and help diagnose failures. But I review the output and decide coverage based on product risk and business impact. AI can generate code quickly; accountability for whether a test is actually useful stays with me."',
            testing: 'Can you use AI productively without outsourcing your judgement?',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Explain the why, not just the what — interviewers assume you can run the tool.',
      'Frame every answer around risk, stability and feedback for the team.',
      'Treat flaky tests as a debugging problem, not something to paper over with retries.',
      'Show you can move work to the right layer (API vs UI) and keep ownership of AI output.',
    ],
    faqs: [
      {
        q: 'What are the most common Playwright interview questions?',
        a: 'The highest-signal questions are about judgement rather than syntax: why you would choose Playwright over Selenium, how your framework is structured and why, how you handle flaky tests, how you combine API and UI testing, and how you use AI responsibly. Interviewers use these to see whether you understand automation engineering, not just the Playwright API.',
      },
      {
        q: 'How should I answer "why Playwright over Selenium"?',
        a: 'Avoid "it is faster and more modern." Instead, make a contextual decision: Playwright offers auto-waiting, browser isolation, parallel execution, combined API and UI testing and easy CI/CD integration, which reduces maintenance risk for modern web apps — while acknowledging Selenium is still valid in established or legacy ecosystems. Choosing the right tool for the team shows judgement.',
      },
      {
        q: 'Do I need to know AI to pass a Playwright interview in 2026?',
        a: 'You should be able to talk about using AI productively — to accelerate boilerplate, generate test ideas and help diagnose failures — while keeping accountability for coverage and usefulness yourself. Interviewers are increasingly checking that you can use AI without outsourcing your engineering judgement.',
      },
    ],
    pdf: {
      label: 'Playwright Interview Cheat Sheet 2026 (PDF)',
      file: '/resources/playwright-interview-cheat-sheet-2026.pdf',
      size: '29 KB',
    },
    cta: {
      heading: 'Build the evidence behind these answers',
      body: 'The strongest interview answers come from real work. Inside STLC helps teams and testers build sustainable Playwright automation — framework, CI/CD and AI-assisted workflows you can speak to with confidence.',
      primaryLabel: 'See Test Automation Capability',
      primaryHref: '/automation-capability',
      secondaryLabel: 'Explore the Academy',
      secondaryHref: 'https://www.insidestlcacademy.com/',
    },
    relatedSlugs: ['how-to-become-a-software-tester', 'ai-prompts-for-qa-engineers'],
  },

  // ------------------------------------------------------------------
  {
    slug: 'ai-prompts-for-qa-engineers',
    category: 'AI for QA',
    title: 'AI Prompts for QA Engineers: A Practical Testing Workflow',
    metaTitle: 'AI Prompts for QA Engineers (40+ Practical Testing Prompts)',
    description:
      'A practical library of AI prompts for testers — requirements analysis, test design, API testing, debugging, risk-based testing and Playwright — plus a workflow to use them without outsourcing your judgement.',
    readTime: '8 min read',
    updated: '2026',
    intro: [
      'The strongest QA engineers in 2026 are not replacing their thinking with AI — they are amplifying it. Used well, an AI assistant accelerates the repetitive parts of testing, broadens your coverage ideas and speeds up debugging, while you keep ownership of risk, context and judgement.',
      'This is a practical prompt library organised by testing activity, plus a workflow that ties them together. Use these prompts inside Claude, ChatGPT or your preferred assistant to improve coverage and save time — not to hand over the decisions that make you valuable.',
    ],
    sections: [
      {
        heading: 'How to use these prompts',
        blocks: [
          {
            type: 'p',
            text: 'Each prompt below is a starting point — paste in your real user story, API response, error log or feature description, then push the AI with follow-ups. Treat the output as a draft to review and sharpen, never a finished answer to copy.',
          },
        ],
      },
      {
        heading: '1. Requirements analysis prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Review this user story and identify unclear acceptance criteria.',
              'What edge cases are missing from this requirement?',
              'Generate risk areas based on this workflow.',
              'What assumptions are hidden in this feature description?',
              'What questions should QA ask before testing begins?',
            ],
          },
        ],
      },
      {
        heading: '2. Test case generation prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Generate happy path and edge case scenarios for this feature.',
              'Create negative test scenarios for this API.',
              'Generate mobile-specific test conditions.',
              'Create accessibility-focused test ideas.',
              'Generate exploratory charters for high-risk workflows.',
            ],
          },
        ],
      },
      {
        heading: '3. API testing prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Generate Postman test scripts for this API response.',
              'Find missing validation checks in this API.',
              'Generate boundary value test data.',
              'Suggest security-focused API tests.',
              'Generate API regression coverage areas.',
            ],
          },
        ],
      },
      {
        heading: '4. Debugging & failure analysis prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Based on this error log, what are the most likely root causes?',
              'What changed recently that could explain this failure?',
              'What nearby systems could also be impacted?',
              'Explain this stack trace in simple terms.',
              'Suggest likely flaky test causes.',
            ],
          },
        ],
      },
      {
        heading: '5. Risk-based testing prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'If this feature fails in production, what business impact occurs?',
              'Which user journeys are highest risk?',
              'Which tests should run first under time pressure?',
              'What areas are most likely impacted by this change?',
              'What failures would damage customer trust most?',
            ],
          },
        ],
      },
      {
        heading: '6. Playwright + AI prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Generate Playwright selectors for this UI.',
              'Convert these manual steps into Playwright.',
              'Suggest stable locator strategies.',
              'Why might this Playwright test be flaky?',
              'Generate retry-safe automation logic.',
            ],
          },
        ],
      },
      {
        heading: '7. Exploratory testing 2.0',
        blocks: [
          {
            type: 'list',
            items: [
              'Test this workflow like a frustrated customer.',
              'Create exploratory test ideas for interruptions and recovery.',
              'Generate usability-focused exploratory charters.',
              'Identify silent failure scenarios.',
              'Test this feature from an accessibility perspective.',
            ],
          },
        ],
      },
      {
        heading: '8. Reporting & communication prompts',
        blocks: [
          {
            type: 'list',
            items: [
              'Rewrite this bug report for executives.',
              'Summarise this defect for developers.',
              'Convert technical findings into business risk.',
              'Generate stakeholder-friendly test updates.',
              'Write a concise release risk summary.',
            ],
          },
        ],
      },
      {
        heading: 'A full workflow: requirement → risk → test → automation',
        blocks: [
          {
            type: 'steps',
            items: [
              { label: 'Paste the user story', detail: 'Drop the story into your AI assistant as context.' },
              { label: 'Surface the risk', detail: 'Ask the AI to identify the highest-risk workflows.' },
              { label: 'Generate scenarios', detail: 'Produce happy path, edge case and negative scenarios.' },
              { label: 'Skeleton the automation', detail: 'Generate Playwright or Cypress automation skeletons.' },
              { label: 'Prioritise coverage', detail: 'Rank regression coverage by business impact.' },
              { label: 'Communicate the risk', detail: 'Summarise release risk for stakeholders.' },
            ],
          },
        ],
      },
      {
        heading: 'How smart QA engineers use AI',
        blocks: [
          {
            type: 'p',
            text: 'AI is most powerful when it accelerates repetitive work, generates broader coverage ideas, surfaces risks faster, supports debugging and improves communication. But human judgement, context awareness, product understanding and risk analysis are still the skills that separate an average tester from an exceptional one. Use AI to do more of your best thinking — not to avoid thinking at all.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Amplify your testing with AI; do not outsource judgement, context or risk analysis.',
      'Organise prompts by activity — requirements, design, API, debugging, risk, automation, reporting.',
      'Always paste real artefacts (stories, logs, responses) and treat output as a draft to review.',
      'The requirement → risk → test → automation workflow turns prompts into a repeatable process.',
    ],
    faqs: [
      {
        q: 'What are the best AI prompts for software testers?',
        a: 'The most useful prompts map to real testing activities: analysing requirements for gaps and hidden assumptions, generating happy-path, edge and negative scenarios, creating API test data and checks, diagnosing failures from logs, and prioritising tests by business risk. This guide groups 40+ such prompts by activity so you can slot them into your workflow.',
      },
      {
        q: 'Can AI replace QA engineers?',
        a: 'No. AI accelerates repetitive work, broadens coverage ideas and speeds up debugging, but human judgement, product understanding and risk analysis still decide what is worth testing and whether a result actually matters. The strongest testers use AI to amplify their thinking, keeping accountability for coverage and quality themselves.',
      },
      {
        q: 'Which AI tools work for these prompts?',
        a: 'The prompts are tool-agnostic — they work in Claude, ChatGPT or any capable assistant. What matters more than the tool is the workflow: paste real artefacts, push with follow-up questions, and review the output against product risk before you act on it.',
      },
    ],
    pdf: {
      label: 'AI Workflow Prompt Pack for QA (PDF)',
      file: '/resources/ai-workflow-prompt-pack-2026.pdf',
      size: '83 KB',
    },
    cta: {
      heading: 'Adopt AI in QA, responsibly',
      body: 'Inside STLC helps teams introduce AI into testing where it adds value — and keep human judgement on the decisions that count, with practical AI-for-QA workshops and strategy.',
      primaryLabel: 'See AI for QA',
      primaryHref: '/ai-for-qa',
      secondaryLabel: 'Get the free resources',
      secondaryHref: '/resources',
    },
    relatedSlugs: ['playwright-interview-questions', 'how-to-become-a-software-tester'],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
