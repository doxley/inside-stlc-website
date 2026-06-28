import type { Metadata } from "next";
import Link from "next/link";
import {
  Gauge,
  ShieldAlert,
  Workflow,
  Users2,
  Layers,
  CheckCircle2,
  Compass,
  Rocket,
  Handshake,
  ArrowRight,
  UserSearch,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "QA & Test Strategy Consulting",
  description:
    "Risk-led QA and test strategy consulting: testing maturity reviews, QA process improvement, team capability assessment, delivery risk reduction and quality ownership across teams.",
};

const capabilities = [
  {
    icon: Gauge,
    title: "Testing Maturity Reviews",
    description:
      "An honest assessment of where your testing stands today — coverage, tooling, process and culture — with a clear picture of what to improve first.",
  },
  {
    icon: ShieldAlert,
    title: "Risk-Led Test Strategy",
    description:
      "A test strategy built around real delivery risk, not ceremony. Effort is focused where failure would hurt most, so testing scales with your product.",
  },
  {
    icon: Workflow,
    title: "QA Process Improvement",
    description:
      "Streamline how testing actually happens — from requirements and test design to defect flow and release sign-off — without adding overhead.",
  },
  {
    icon: Users2,
    title: "Test Team Capability Assessment",
    description:
      "Understand the real strengths and gaps in your QA team, and the development pathways that will close them fastest.",
  },
  {
    icon: Layers,
    title: "Delivery Risk Reduction",
    description:
      "Build the checks, signals and reporting that give stakeholders genuine confidence before every release.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Ownership Across Teams",
    description:
      "Move quality out of a final-stage gate and into the whole delivery flow, so developers, QA and product share ownership of it.",
  },
];

const engagements = [
  {
    icon: Compass,
    name: "QA Discovery Review",
    description:
      "A focused review of current QA practices, risks, tooling, automation, team capability and improvement opportunities.",
  },
  {
    icon: Rocket,
    name: "Automation Capability Sprint",
    description:
      "A practical engagement to assess automation maturity, define a roadmap, create a pilot approach and coach the team.",
  },
  {
    icon: Handshake,
    name: "QA Transformation Partnership",
    description:
      "Longer-term support for teams needing strategic QA leadership, automation improvement, training and delivery support.",
  },
];

const recruitment = [
  "QA role definition — clarity on the skills you actually need",
  "Interview support and structured assessment design",
  "Candidate assessment that tests real-world ability",
  "Building effective, balanced QA teams",
  "Helping you understand junior vs. senior vs. lead needs",
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="QA & Test Strategy Consulting"
        title={<>Quality strategy that <span className="gradient-text">reduces delivery risk</span></>}
        subtitle="Risk-led test strategy, testing maturity reviews, QA process improvement and capability assessment — practical consultancy that leaves your team stronger."
        ctaLabel="Book a QA Discovery Call"
        ctaHref="/contact"
      />

      {/* Capabilities */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">What's included</span>
            <h2 className="section-title">Where consulting makes the difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="card">
                <div className="icon-tile mb-4"><c.icon size={20} /></div>
                <h3 className="font-semibold text-white text-lg mb-2">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section id="engagements" className="px-4 py-20" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Engagements</span>
            <h2 className="section-title">Three ways to start</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {engagements.map((e) => (
              <div key={e.name} className="card flex flex-col">
                <div className="icon-tile mb-4"><e.icon size={20} /></div>
                <h3 className="text-lg font-bold text-white mb-2">{e.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{e.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Discuss this <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="recruitment" className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="panel-glow grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12">
            <div>
              <div className="icon-tile green mb-5"><UserSearch size={22} /></div>
              <span className="eyebrow no-rule mb-3" style={{ color: "var(--green)" }}>Recruitment & QA Team Building</span>
              <h2 className="section-title mb-4">Hire the QA skills you actually need</h2>
              <p className="text-muted leading-relaxed">
                Building a QA team is one of the most expensive decisions a
                business makes — and one of the easiest to get wrong. Inside STLC
                helps you define roles, assess candidates objectively and build a
                team that fits your delivery reality.
              </p>
            </div>
            <ul className="space-y-3">
              {recruitment.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure where the biggest risk is?"
        subheading="A short discovery call is often enough to identify where the fastest, highest-value QA improvements can be made."
        buttonLabel="Book a Discovery Call"
        buttonHref="/contact"
        secondaryLabel="Explore Automation Capability"
        secondaryHref="/automation-capability"
      />
    </>
  );
}
