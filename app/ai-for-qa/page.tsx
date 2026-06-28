import type { Metadata } from "next";
import {
  Bot,
  PencilRuler,
  Presentation,
  ShieldCheck,
  Scale,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI for QA & Modern Testing",
  description:
    "Practical, responsible AI adoption for testers: AI-assisted test design, AI test strategy workshops, and clarity on where AI adds value and where human judgement remains critical.",
};

const services = [
  {
    icon: Bot,
    title: "Practical AI Adoption for Testers",
    description:
      "Cut through the hype with a grounded view of how AI tools fit real testing work — and how to introduce them without disrupting delivery.",
  },
  {
    icon: PencilRuler,
    title: "AI-Assisted Test Design",
    description:
      "Use AI to accelerate test idea generation, data creation and coverage analysis — while keeping testers firmly in control of quality.",
  },
  {
    icon: Presentation,
    title: "AI Test Strategy Workshops",
    description:
      "Hands-on workshops that help your team build a clear, shared view of where AI fits into your testing strategy and tooling.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Responsible AI Use in QA",
    description:
      "Guidance on data handling, validation and review so AI is used safely — without introducing new risk into your delivery.",
  },
];

const addsValue = [
  "Generating test ideas and edge cases faster",
  "Drafting test data and documentation",
  "Summarising defects, logs and coverage gaps",
  "Accelerating repetitive analysis",
  "Supporting exploratory testing",
];

const humanJudgement = [
  "Deciding what risk actually matters",
  "Interpreting ambiguous requirements",
  "Judging real-world impact and severity",
  "Owning release and quality decisions",
  "Validating AI output for correctness",
];

export default function AiForQaPage() {
  return (
    <>
      <PageHero
        eyebrow="AI for QA & Modern Testing"
        title={<>AI where it <span className="gradient-text">adds value</span> — judgement where it matters</>}
        subtitle="Inside STLC helps teams adopt AI in testing practically and responsibly — accelerating the work AI is good at, while keeping human judgement on the decisions that count."
        ctaLabel="Book an AI for QA Workshop"
        ctaHref="/contact"
      />

      {/* Services */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Modern testing</span>
            <h2 className="section-title">Adopt AI in QA with confidence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="icon-tile green mb-4"><s.icon size={20} /></div>
                <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value vs judgement */}
      <section className="px-4 py-20" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3 justify-center"><Sparkles size={14} className="inline" /> The honest view</span>
            <h2 className="section-title">Where AI helps — and where it doesn&apos;t</h2>
            <p className="section-subtitle mx-auto mt-3">
              Helping teams understand where AI adds value and where human
              judgement remains critical is central to how Inside STLC works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={20} style={{ color: "var(--green)" }} />
                <h3 className="font-bold text-white text-lg">Where AI adds value</h3>
              </div>
              <ul className="space-y-3">
                {addsValue.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--green)" }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="flex items-center gap-2 mb-5">
                <Scale size={20} style={{ color: "var(--blue-bright)" }} />
                <h3 className="font-bold text-white text-lg">Where human judgement stays critical</h3>
              </div>
              <ul className="space-y-3">
                {humanJudgement.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--blue-bright)" }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Give your testers a clear AI strategy"
        subheading="Run a focused AI for QA workshop to build a shared, responsible view of where AI fits in your testing — and start using it well."
        buttonLabel="Book a Discovery Call"
        buttonHref="/contact"
        secondaryLabel="Explore the Academy"
        secondaryHref="/academy"
      />
    </>
  );
}
