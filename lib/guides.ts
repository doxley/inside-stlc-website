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

  // ------------------------------------------------------------------
  {
    slug: 'what-is-software-testing',
    category: 'Fundamentals',
    title: 'What Is Software Testing? A Beginner’s Guide for 2026',
    metaTitle: 'What Is Software Testing? A Beginner’s Guide (2026)',
    description:
      'A clear, beginner-friendly explanation of software testing — what it is, what testers actually do, manual vs automation, the testing lifecycle, and how to get your first QA job in 2026.',
    readTime: '8 min read',
    updated: '2026',
    intro: [
      'Software testing is one of the best entry points into tech — but the industry is changing quickly. AI tools, automation and rising expectations mean testers today need more than definitions. This guide explains what software testing actually is, in plain language, and what it looks like to do it well.',
      'If you are curious about QA, considering a career change, or working towards your first testing role in 2026, this is the grounding to start from — written from 26+ years of real-world software testing and QA leadership.',
    ],
    sections: [
      {
        heading: 'What is software testing?',
        blocks: [
          {
            type: 'p',
            text: 'Software testing is the process of checking software to find problems before real users experience them. At its core, testing answers a few simple questions:',
          },
          {
            type: 'list',
            items: [
              'Does the software work correctly?',
              'Does it behave the way it is expected to?',
              'Can users complete their tasks successfully?',
              'What happens when things go wrong?',
            ],
          },
          {
            type: 'p',
            text: 'Testing exists because software built by humans will always contain mistakes. The job of QA (Quality Assurance) is not to prove software is perfect — it is to reduce risk and give the team good information about quality before release.',
          },
        ],
      },
      {
        heading: 'What do software testers actually do?',
        blocks: [
          {
            type: 'p',
            text: 'Testing is not just clicking buttons. The best testers think critically about how a product could fail. Day to day, a software tester might:',
          },
          {
            type: 'list',
            items: [
              'Execute tests against an application.',
              'Report bugs and defects clearly, with evidence.',
              'Validate that requirements have actually been met.',
              'Think about real user behaviour and identify edge cases.',
              'Improve quality processes and support releases.',
              'Collaborate closely with developers and product teams.',
            ],
          },
        ],
      },
      {
        heading: 'A real example: testing a login page',
        blocks: [
          {
            type: 'p',
            text: 'The quickest way to understand testing is to see how a tester thinks about something familiar. Take a simple login page — a good tester checks far more than the obvious:',
          },
          {
            type: 'steps',
            items: [
              { label: 'Happy path', detail: 'Correct username and password lead to a successful login.' },
              { label: 'Negative testing', detail: 'Wrong password, empty fields, or an invalid email format are handled gracefully.' },
              { label: 'Edge cases', detail: 'Very long usernames, special characters and unexpected input do not break the page.' },
            ],
          },
          {
            type: 'p',
            text: 'That shift — from "does it work?" to "how could it fail, and who would it affect?" — is the mindset the whole career is built on.',
          },
        ],
      },
      {
        heading: 'Manual vs automation testing',
        blocks: [
          {
            type: 'p',
            text: 'Manual testing means a person exercises the software directly, using judgement, curiosity and exploration. Automation testing means writing code (with a tool like Playwright) to run repeatable checks quickly and consistently. They are not rivals — strong QA uses both: automation for stable, repetitive checks, and human testing for exploration, usability and anything that needs judgement. Start with manual testing; add automation once your fundamentals are solid.',
          },
        ],
      },
      {
        heading: 'The Software Testing Lifecycle (STLC)',
        blocks: [
          {
            type: 'p',
            text: 'Testing is not a single step at the end — it runs alongside delivery, from understanding requirements and designing tests, through execution and defect reporting, to release and feedback. Understanding this lifecycle (and how it sits inside Agile delivery) is what turns "I can find bugs" into "I can own quality across a team".',
          },
        ],
      },
      {
        heading: 'Non-functional testing',
        blocks: [
          {
            type: 'p',
            text: 'Functional testing asks "does it do the right thing?". Non-functional testing asks "how well does it do it?" — covering performance, security, accessibility and reliability. A page can be perfectly functional and still be too slow, insecure or unusable. Knowing both exist, and when each matters, marks you out early.',
          },
        ],
      },
      {
        heading: 'How to get your first QA job',
        blocks: [
          {
            type: 'p',
            text: 'Employers hire evidence, not claims. The fastest route in is to learn the fundamentals, practise them on real or demo applications, and package that practice into a small portfolio: a few well-written test cases, some clear defect reports, and a short note on what you tested and what you found. Then apply with that evidence to roles you are actually suited to — rather than sending a generic CV everywhere.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Testing reduces risk and informs the team — it is not about proving software is perfect.',
      'Great testers think about how things fail and who it affects, not just whether they work.',
      'Use manual and automation testing together; start manual, add automation later.',
      'Employers hire evidence — a small portfolio beats a long list of claims.',
    ],
    faqs: [
      {
        q: 'What is software testing in simple terms?',
        a: 'Software testing is checking software to find problems before real users do. It answers whether the software works correctly, behaves as expected, lets users complete their tasks, and copes when things go wrong. The goal is to reduce risk and give the team clear information about quality before release.',
      },
      {
        q: 'Is software testing a good career in 2026?',
        a: 'Yes — it remains one of the most accessible entry points into tech, and modern QA (with automation and AI) is in demand. Expectations have risen: testers are expected to think about risk, use common tools and show evidence of real practice, rather than just follow scripts. That makes it a strong career for people who think critically and communicate well.',
      },
      {
        q: 'Do I need to code to be a software tester?',
        a: 'Not to start. You can enter QA through strong manual and exploratory testing, tool fluency and clear communication. Coding (for example basic TypeScript or JavaScript with Playwright) becomes valuable once you move into automation, but it is a later step, not a prerequisite.',
      },
    ],
    pdf: {
      label: 'Software Testing Starter Pack 2026 (PDF)',
      file: '/resources/software-testing-starter-pack-2026.pdf',
      size: '3.9 MB',
    },
    cta: {
      heading: 'Ready to go from curious to job-ready?',
      body: 'Inside STLC Academy turns these fundamentals into a guided programme — with lessons, worked examples and a portfolio project that gets you hired.',
      primaryLabel: 'Explore Inside STLC Academy',
      primaryHref: 'https://www.insidestlcacademy.com/',
      secondaryLabel: 'See all free resources',
      secondaryHref: '/resources',
    },
    relatedSlugs: ['how-to-become-a-software-tester', 'how-to-write-a-test-case'],
  },

  // ------------------------------------------------------------------
  {
    slug: 'what-should-you-automate',
    category: 'Automation & Playwright',
    title: 'What Should You Automate? A Simple Test Automation Decision Framework',
    metaTitle: 'What Should You Automate? A Test Automation Decision Framework',
    description:
      'A simple frequency × risk framework for deciding what is actually worth automating — which tests to automate first, what to keep manual, and a checklist to run before you write a Playwright test.',
    readTime: '6 min read',
    updated: '2026',
    intro: [
      'The most expensive automation is the test that should never have been written. Teams burn time maintaining brittle suites that automate the wrong things — not because they lack skill, but because they automate by habit rather than by decision.',
      'Here is the simple framework I use to decide what is worth automating. Before you write a single Playwright test, answer two questions: how often will this check run, and how painful is failure?',
    ],
    sections: [
      {
        heading: 'The two questions that decide everything',
        blocks: [
          {
            type: 'steps',
            items: [
              { label: 'Frequency', detail: 'High = it runs every sprint, regression, release or daily pipeline. Low = one-off, exploratory, rare or rapidly changing.' },
              { label: 'Risk / pain', detail: 'High = failure blocks revenue, access, core workflows, compliance or critical data. Low = cosmetic, low-impact or easily spotted by hand.' },
            ],
          },
          {
            type: 'p',
            text: 'Plot a check against those two axes and the right decision usually becomes obvious.',
          },
        ],
      },
      {
        heading: 'The four quadrants',
        blocks: [
          {
            type: 'list',
            items: [
              'High frequency + high risk → Automate here. These are your best candidates: critical journeys that repeat often and give fast, valuable feedback.',
              'High frequency + low risk → Selective automation. Automate only if it saves meaningful time and is stable. Keep the suite lean.',
              'Low frequency + high risk → Investigate first. High impact but infrequent — consider targeted automation, monitoring, or a manual release check.',
              'Low frequency + low risk → Keep manual. Usually not worth the automation cost; explore or check it when needed.',
            ],
          },
        ],
      },
      {
        heading: 'Good first Playwright candidates',
        blocks: [
          {
            type: 'p',
            text: 'When you are starting out, automate the journeys that are both important and stable:',
          },
          {
            type: 'list',
            items: [
              'Login and authentication.',
              'Checkout and payment paths.',
              'Account creation.',
              'Critical permissions and access control.',
              'Core create-read-update-delete (CRUD) journeys.',
              'Stable regression checks you run repeatedly.',
            ],
          },
        ],
      },
      {
        heading: 'Usually keep manual (or explore)',
        blocks: [
          {
            type: 'list',
            items: [
              'One-off exploratory ideas.',
              'Rapidly changing prototypes.',
              'Visual nuance and subjective UX.',
              'Low-risk copy or cosmetic checks.',
              'Rare edge cases with a high setup cost.',
              'Anything cheaper to check manually than to maintain as code.',
            ],
          },
        ],
      },
      {
        heading: 'The pre-automation checklist',
        blocks: [
          {
            type: 'p',
            text: 'Before you automate a check, make sure you can tick all of these:',
          },
          {
            type: 'list',
            items: [
              'It repeats often.',
              'Its failure actually matters.',
              'The behaviour is reasonably stable.',
              'The expected result is clear.',
              'The test can run independently.',
              'Automation will save more time than it costs to maintain.',
            ],
          },
        ],
      },
      {
        heading: 'Learn Playwright in the right order',
        blocks: [
          {
            type: 'p',
            text: 'Do not start with framework architecture. Write one test, make it stable, add a few genuinely valuable journeys, feel the duplication and maintenance pain for yourself — and only then introduce Page Objects, test data, Git and CI/CD. The structure means more once you have felt the problem it solves.',
          },
          {
            type: 'p',
            text: 'The rule to remember: do not automate because you can. Automate because the feedback is valuable.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Decide what to automate by frequency × risk, not by habit.',
      'Automate high-frequency, high-risk journeys first; keep low-value checks manual.',
      'Run the six-point checklist before automating anything.',
      'Learn Playwright by feeling the pain first, then adding structure.',
    ],
    faqs: [
      {
        q: 'What should you automate first in test automation?',
        a: 'Start with checks that are both high-frequency and high-risk — login, checkout and payment, account creation, critical permissions and core CRUD journeys. These repeat often and their failure genuinely matters, so automating them gives fast, valuable feedback for the least maintenance risk.',
      },
      {
        q: 'What should not be automated?',
        a: 'Avoid automating one-off exploratory ideas, rapidly changing prototypes, subjective UX and visual nuance, low-risk cosmetic checks, and rare edge cases with high setup cost. If something is cheaper to check manually than to maintain as code, keep it manual.',
      },
      {
        q: 'How do I decide whether a test is worth automating?',
        a: 'Use a simple frequency × risk judgement, then a checklist: does it repeat often, does its failure matter, is the behaviour stable, is the expected result clear, can it run independently, and will automation save more time than it costs to maintain? If you cannot tick those, think twice.',
      },
    ],
    pdf: {
      label: 'Automation Decision Checklist 2026 (PDF)',
      file: '/resources/automation-decision-checklist-2026.pdf',
      size: '29 KB',
    },
    cta: {
      heading: 'Automate the right things, sustainably',
      body: 'Inside STLC helps teams build automation capability that pays off — deciding what is worth automating, then building a lean, reliable Playwright suite your team can own.',
      primaryLabel: 'See Test Automation Capability',
      primaryHref: '/automation-capability',
      secondaryLabel: 'Read: Playwright interview questions',
      secondaryHref: '/guides/playwright-interview-questions',
    },
    relatedSlugs: ['playwright-interview-questions', 'ai-prompts-for-qa-engineers'],
  },

  // ------------------------------------------------------------------
  {
    slug: 'what-qa-hiring-managers-look-for',
    category: 'Interview & Hiring',
    title: 'What QA Hiring Managers Look For: A 5-Point Framework',
    metaTitle: 'What QA Hiring Managers Look For (5-Point Framework)',
    description:
      'The five things a hiring manager of 25+ years actually looks for in a QA interview — curiosity, business impact, communication, judgement and a thinking mindset — with red flags, green flags and how to prepare.',
    readTime: '8 min read',
    updated: '2026',
    intro: [
      'Most candidates I rejected passed the technical screening. They knew the tools. They had the certificates. What they did not have was what this framework measures. Over 25+ years of hiring and building QA teams, I used the same five lenses in every interview to answer one question: do I want this person on my team?',
      'None of these five points requires another certification or five more years of experience. They require a shift in how you think about your work — and how you talk about it. Here is the framework, with the red flags that end interviews, the green flags that earn a yes, and how to prepare for each.',
    ],
    sections: [
      {
        heading: '1. Curiosity & preparation',
        blocks: [
          { type: 'p', text: 'What I was looking for: did this person come in with questions, not just answers? The strongest candidates had done their homework — they had explored the product, read the engineering blog, and noticed something specific they wanted to understand better.' },
          { type: 'list', items: [
            'Red flag: no questions, or only questions about salary, benefits and hours.',
            'Red flag: generic answers that could apply to any company.',
            'Green flag: "I noticed you recently migrated to the cloud — how did that affect your testing pipeline?"',
            'Green flag: demonstrates they researched you, not just the role.',
          ] },
          { type: 'p', text: 'How to prepare: find one thing the company has shipped or published recently, and form one genuine question around it. That is it.' },
        ],
      },
      {
        heading: '2. Business impact thinking',
        blocks: [
          { type: 'p', text: 'What I was looking for: can this person connect testing to what the business actually cares about? Most testers report bugs. The testers I hired reported risk — what a bug would cost if it shipped, in money, trust or users.' },
          { type: 'list', items: [
            'Red flag: describes bugs only in technical terms (steps to reproduce, expected vs actual).',
            'Red flag: cannot articulate the real-world impact of a defect, and treats all bugs as equally important.',
            'Green flag: "This affects ~12% of checkout users — about 3,400 transactions a month at risk."',
            'Green flag: frames testing around revenue, retention, compliance and reputation.',
          ] },
          { type: 'p', text: 'How to prepare: have one story ready where you connected a testing finding to a business outcome. Use numbers if you have them.' },
        ],
      },
      {
        heading: '3. Communication',
        blocks: [
          { type: 'p', text: 'What I was looking for: can this person make risk understandable to anyone in the building? The best testers could walk into a room with developers, product managers and executives and adjust their language for each — without losing the substance. This is becoming more valuable in QA, not less.' },
          { type: 'list', items: [
            'Red flag: overly technical explanations with no ability to simplify.',
            'Red flag: blames developers or throws colleagues under the bus.',
            'Green flag: adapts the explanation to who is asking.',
            'Green flag: describes handling disagreement constructively.',
          ] },
          { type: 'p', text: 'How to prepare: practise explaining your best testing achievement twice — once for a fellow engineer, once for a product manager who does not know what a test case is.' },
        ],
      },
      {
        heading: '4. Judgement',
        blocks: [
          { type: 'p', text: 'What I was looking for: do they know what not to test? When time is tight and scope is large, what do you cut, what do you keep, and can you explain why? This is the skill that separates testers I want from testers going through the motions.' },
          { type: 'list', items: [
            'Red flag: "I test everything" — this is not a virtue, it is an absence of judgement.',
            'Red flag: no framework for prioritising effort, and no example of a real trade-off.',
            'Green flag: "I asked the product owner: what are the three things that absolutely cannot break?"',
            'Green flag: describes cutting test cases deliberately, with reasoning.',
          ] },
          { type: 'p', text: 'How to prepare: have a story about a difficult testing trade-off under pressure. What did you cut? What did you protect? Why?' },
        ],
      },
      {
        heading: '5. Thinking vs checking mindset',
        blocks: [
          { type: 'p', text: 'What I was looking for: do they think about quality, or just testing? The candidates I hired saw their job as protecting the user experience, not executing test cases. They questioned requirements and noticed when acceptance criteria missed edge cases. This is the hardest thing to measure and the most revealing.' },
          { type: 'list', items: [
            'Red flag: describes testing purely as following scripts or checklists.',
            'Red flag: sees their role as "finding bugs" rather than "managing quality risk".',
            'Green flag: "The criteria covered the happy path, but didn’t address a payment gateway timing out mid-transaction."',
            'Green flag: talks about testing in terms of risk, user impact and systems thinking.',
          ] },
          { type: 'p', text: 'How to prepare: think of one moment where you went beyond what was asked — where you noticed something that was not in the test plan but mattered. That is your story.' },
        ],
      },
      {
        heading: 'Score yourself before the interview',
        blocks: [
          { type: 'p', text: 'Rate yourself one to five on each point, and note the specific story you would tell for it. A five means you have a compelling, specific example; a one means it is a development area. The candidates who got hired were not always the most technical or experienced — but they walked in demonstrating these five things.' },
        ],
      },
    ],
    keyTakeaways: [
      'Technical skill gets you screened in; these five things get you hired.',
      'Report risk, not just bugs — connect findings to business impact.',
      'Show judgement by knowing what not to test, and communicate to any audience.',
      'Prepare one concrete story for each of the five points.',
    ],
    faqs: [
      {
        q: 'What do QA hiring managers actually look for?',
        a: 'Beyond tools and certificates, they look for five things: curiosity and preparation, business-impact thinking, clear communication, judgement about what not to test, and a quality-first thinking mindset rather than a checking one. Most candidates who are rejected passed the technical screen — they were missing these.',
      },
      {
        q: 'How do I stand out in a QA interview?',
        a: 'Come prepared with a genuine question about the company, frame your testing stories around business impact (ideally with numbers), explain risk clearly to any audience, show you can prioritise and cut test effort deliberately, and give an example of noticing something that was not in the test plan but mattered.',
      },
      {
        q: 'Do I need more certifications to get hired in QA?',
        a: 'Usually not. None of the five things hiring managers look for require another certification or more years of experience — they require a shift in how you think about and talk about your work. A compelling, specific story for each point does more than an extra badge on your CV.',
      },
    ],
    pdf: {
      label: 'The 5-Point QA Hiring Framework (PDF)',
      file: '/resources/5-point-qa-hiring-framework.pdf',
      size: '209 KB',
    },
    cta: {
      heading: 'Prepare for your QA interview with confidence',
      body: 'Inside STLC Academy includes targeted interview preparation — what interviewers really look for, and how to tell your story with evidence.',
      primaryLabel: 'Explore the Academy',
      primaryHref: 'https://www.insidestlcacademy.com/',
      secondaryLabel: 'Read: Playwright interview questions',
      secondaryHref: '/guides/playwright-interview-questions',
    },
    relatedSlugs: ['playwright-interview-questions', 'how-to-become-a-software-tester'],
  },

  // ------------------------------------------------------------------
  {
    slug: 'how-to-write-a-test-case',
    category: 'Fundamentals',
    title: 'How to Write a Good Test Case (With Examples)',
    metaTitle: 'How to Write a Good Test Case (With Examples)',
    description:
      'A practical guide to writing clear, useful test cases — the seven parts of a strong test case, a worked example, the beginner mistakes to avoid, and how to think like a tester.',
    readTime: '6 min read',
    updated: '2026',
    intro: [
      'A test case is a documented set of actions, data and expected outcomes used to verify that a feature works correctly. Written well, test cases help a team test consistently, uncover defects and communicate clearly. Written badly, they waste everyone’s time.',
      'This is a practical, beginner-friendly guide to writing test cases that actually earn their place — the parts that matter, a worked example, and the habits that separate useful cases from box-ticking.',
    ],
    sections: [
      {
        heading: 'Why good test cases matter',
        blocks: [
          { type: 'list', items: [
            'They improve coverage of the scenarios that matter.',
            'They reduce ambiguity between testers and developers.',
            'They make regression testing repeatable.',
            'They provide evidence of what was tested.',
            'They help junior testers learn structured thinking.',
          ] },
        ],
      },
      {
        heading: 'The 7 parts of a strong test case',
        blocks: [
          { type: 'steps', items: [
            { label: 'Test Case ID', detail: 'A unique reference, such as LOGIN-001.' },
            { label: 'Title', detail: 'A clear statement of what is being tested.' },
            { label: 'Preconditions', detail: 'What must already be true before execution.' },
            { label: 'Steps', detail: 'The exact actions the tester performs.' },
            { label: 'Test Data', detail: 'The specific values used in the test.' },
            { label: 'Expected Result', detail: 'What should happen if the system works.' },
            { label: 'Status / Actual Result', detail: 'Pass, Fail or Blocked — plus notes on what actually happened.' },
          ] },
        ],
      },
      {
        heading: 'A worked example',
        blocks: [
          { type: 'list', items: [
            'ID: LOGIN-001',
            'Title: Verify a user can log in with valid credentials.',
            'Preconditions: A registered account exists.',
            'Steps: 1) Open the login page. 2) Enter a valid email. 3) Enter the password. 4) Click Login.',
            'Test Data: qa@test.com / Password123',
            'Expected Result: The user is redirected to the dashboard.',
          ] },
          { type: 'p', text: 'Notice how little is left to interpretation. Anyone on the team could run this, get the same result, and know immediately whether it passed.' },
        ],
      },
      {
        heading: 'Beginner mistakes to avoid',
        blocks: [
          { type: 'list', items: [
            'Too vague — "Check checkout works" tells no one what to actually do.',
            'Too much detail — documenting every tiny mouse movement.',
            'Missing the expected result, so pass or fail is a matter of opinion.',
            'Testing too many objectives in one case.',
            'Unclear titles that do not say what is being verified.',
          ] },
        ],
      },
      {
        heading: 'How to think like a tester',
        blocks: [
          { type: 'p', text: 'Good test cases come from good questions. As you write, keep asking: what matters most to the user? What could fail? What data should I try? What result would prove success? Focus on clarity, coverage and risk — not volume.' },
        ],
      },
      {
        heading: 'Practice exercise',
        blocks: [
          { type: 'p', text: 'Write five test cases for a shopping basket page, covering a positive scenario, a negative scenario, a boundary case, a usability check and an error-handling case. Modern teams may use checklists, scenarios, BDD or exploratory notes instead of heavyweight cases — but clear thinking still wins, whatever the format.' },
        ],
      },
    ],
    keyTakeaways: [
      'A strong test case has seven parts — and always a clear expected result.',
      'Write for clarity: anyone should be able to run it and get the same result.',
      'Avoid vagueness, over-documentation and testing several objectives at once.',
      'Great test cases come from good questions about risk, coverage and the user.',
    ],
    faqs: [
      {
        q: 'What are the parts of a good test case?',
        a: 'A strong test case has seven parts: a unique Test Case ID, a clear Title, Preconditions, Steps, Test Data, an Expected Result, and a Status / Actual Result. The expected result is the part beginners most often miss — without it, pass or fail becomes a matter of opinion.',
      },
      {
        q: 'How do you write a test case for beginners?',
        a: 'Start with a clear title that says what you are verifying, note any preconditions, list exact steps and the specific test data, and state the expected result. Keep each case focused on one objective, and make it clear enough that anyone could run it and get the same result.',
      },
      {
        q: 'What is an example of a test case?',
        a: 'A simple example: ID LOGIN-001, "Verify a user can log in with valid credentials"; precondition "a registered account exists"; steps to open the login page, enter a valid email and password and click Login; test data qa@test.com / Password123; expected result "the user is redirected to the dashboard".',
      },
    ],
    pdf: {
      label: 'Writing a Good Test Case Guide (PDF)',
      file: '/resources/writing-a-good-test-case-guide.pdf',
      size: '3.3 MB',
    },
    cta: {
      heading: 'Build the fundamentals that get you hired',
      body: 'Inside STLC Academy takes you from fundamentals like this to a portfolio of real testing work — the evidence employers actually want to see.',
      primaryLabel: 'Explore Inside STLC Academy',
      primaryHref: 'https://www.insidestlcacademy.com/',
      secondaryLabel: 'Read: What is software testing?',
      secondaryHref: '/guides/what-is-software-testing',
    },
    relatedSlugs: ['what-is-software-testing', 'how-to-become-a-software-tester'],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
