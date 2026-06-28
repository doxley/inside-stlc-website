import type { Metadata } from "next";
import {
  Search,
  Wrench,
  Map,
  FlaskConical,
  Users,
  Infinity as InfinityIcon,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { PhaseFlow } from "@/components/Visuals";

export const metadata: Metadata = {
  title: "Test Automation Capability",
  description:
    "Build sustainable test automation capability: automation discovery and assessment, tooling and framework recommendations, roadmap, pilot framework and coaching for internal testers and developers.",
};

const services = [
  {
    icon: Search,
    title: "Automation Discovery & Assessment",
    description:
      "Understand what's worth automating before writing a line of test code — mapping application, risk and team capability to find genuine ROI.",
  },
  {
    icon: Wrench,
    title: "Tooling & Framework Recommendations",
    description:
      "Independent, vendor-neutral guidance on the right tools and frameworks for your stack, team and constraints — not the trendiest option.",
  },
  {
    icon: Map,
    title: "Automation Strategy & Roadmap",
    description:
      "A clear, phased roadmap that sequences automation work by value and risk, so investment is visible, measurable and sustainable.",
  },
  {
    icon: FlaskConical,
    title: "Pilot Automation Framework",
    description:
      "A lean, reliable pilot built on your real journeys and integrated into CI/CD — proving value before any wider rollout.",
  },
  {
    icon: Users,
    title: "Coaching Testers & Developers",
    description:
      "Pair-working and hands-on coaching that transfers knowledge to your team so automation doesn't live with one person.",
  },
  {
    icon: InfinityIcon,
    title: "Sustainable Capability, Not Just Scripts",
    description:
      "The aim is a framework and practice your team can own, maintain and grow — capability that outlasts the engagement.",
  },
];

const phases = [
  {
    num: "1",
    title: "Discovery & Assessment",
    points: [
      "Map application, risks and delivery flow",
      "Assess current tooling and coverage",
      "Evaluate team capability honestly",
      "Define what's worth automating first",
    ],
  },
  {
    num: "2",
    title: "Pilot Framework & Coaching",
    points: [
      "Build a lean, reliable pilot framework",
      "Integrate into CI/CD pipelines",
      "Pair-work and coach internal testers",
      "Prove value on real, high-risk journeys",
    ],
  },
  {
    num: "3",
    title: "Capability Growth & Handover",
    points: [
      "Transfer ownership to your team",
      "Establish maintenance practices",
      "Scale coverage sustainably",
      "Leave capability, not dependency",
    ],
  },
];

const principles = [
  "Automation should serve your team, not impress a vendor",
  "A small, reliable suite beats a large, flaky one",
  "Manual and exploratory testing still matter",
  "Your team must be able to maintain what's built",
  "ROI should be visible and measurable",
];

export default function AutomationCapabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Test Automation Capability"
        title={<>Sustainable automation <span className="gradient-text">your team can own</span></>}
        subtitle="From discovery and tooling to a pilot framework and coaching — Inside STLC builds automation capability inside your team, not dependency on an outside consultant."
        ctaLabel="Plan an Automation Sprint"
        ctaHref="/contact"
      />

      {/* Services */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Capability building</span>
            <h2 className="section-title">From assessment to lasting capability</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="icon-tile mb-4"><s.icon size={20} /></div>
                <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-phase model */}
      <section className="px-4 py-20" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow mb-3">Example Engagement</span>
            <h2 className="section-title mb-4">Building Sustainable Test Automation Capability</h2>
            <p className="section-subtitle">
              A three-phase model focused on enabling internal teams — not
              creating dependency. You finish with a framework, a strategy and a
              team that can carry it forward.
            </p>
          </div>
          <PhaseFlow phases={phases} />
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto panel-glow p-8 sm:p-12">
          <span className="eyebrow no-rule mb-4">Automation principles</span>
          <h2 className="section-title mb-8">How Inside STLC approaches automation</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3 text-muted">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Start with a low-risk automation pilot"
        subheading="Prove the value of automation on your real, high-risk journeys before committing to a wider programme."
        buttonLabel="Book a Discovery Call"
        buttonHref="/contact"
        secondaryLabel="See AI for QA"
        secondaryHref="/ai-for-qa"
      />
    </>
  );
}
