import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Bot,
  GraduationCap,
  Users,
  ShieldCheck,
  Cog,
  AlertTriangle,
  Compass,
  Rocket,
  Handshake,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import TrustBlock from "@/components/TrustBlock";
import ServiceCard from "@/components/ServiceCard";
import ResourceCard from "@/components/ResourceCard";
import { HeroVisual, PhaseFlow } from "@/components/Visuals";
import { freeResources } from "@/lib/data";

const ACADEMY_URL = "https://www.insidestlcacademy.com/";

export const metadata: Metadata = {
  title: "QA Consultancy, Test Automation & AI Testing Strategy",
  description:
    "Inside STLC helps software teams improve QA strategy, reduce delivery risk, build sustainable test automation capability, and upskill testers for modern AI-enabled delivery.",
};

const helpCards = [
  {
    icon: Target,
    title: "QA Strategy",
    description:
      "Risk-led test strategy and testing maturity reviews that focus effort where it actually reduces delivery risk.",
    href: "/consulting",
  },
  {
    icon: Cog,
    title: "Test Automation Capability",
    description:
      "Assessment, tooling, roadmap and pilot frameworks — built so your own team can own and grow them.",
    href: "/automation-capability",
    accent: "green" as const,
  },
  {
    icon: Bot,
    title: "AI in Testing",
    description:
      "Practical, responsible AI adoption for QA — where it adds value, and where human judgement still matters.",
    href: "/ai-for-qa",
    accent: "green" as const,
  },
  {
    icon: GraduationCap,
    title: "Team Upskilling",
    description:
      "Bespoke training and tester development pathways, from manual-to-automation progression to QA leadership.",
    href: "/academy",
  },
  {
    icon: Users,
    title: "QA Recruitment Support",
    description:
      "Role definition, candidate assessment and interview support so you hire the QA skills you actually need.",
    href: "/consulting#recruitment",
  },
  {
    icon: ShieldCheck,
    title: "Delivery Risk Reduction",
    description:
      "Quality ownership across teams and release confidence improvements that make shipping fast feel safe.",
    href: "/consulting",
  },
];

const engagements = [
  {
    icon: Compass,
    name: "QA Discovery Review",
    tag: "Start here",
    description:
      "A focused review of current QA practices, risks, tooling, automation, team capability and improvement opportunities.",
    points: [
      "Testing maturity & risk assessment",
      "Tooling and automation review",
      "Team capability snapshot",
      "Prioritised improvement roadmap",
    ],
    accent: "blue" as const,
  },
  {
    icon: Rocket,
    name: "Automation Capability Sprint",
    tag: "Most popular",
    description:
      "A practical engagement to assess automation maturity, define a roadmap, create a pilot approach and coach the team.",
    points: [
      "Automation discovery & assessment",
      "Framework & tooling recommendations",
      "Pilot framework built with your team",
      "Hands-on coaching and handover",
    ],
    accent: "green" as const,
  },
  {
    icon: Handshake,
    name: "QA Transformation Partnership",
    tag: "Ongoing",
    description:
      "Longer-term support for teams needing strategic QA leadership, automation improvement, training and delivery support.",
    points: [
      "Fractional QA leadership",
      "Continuous automation improvement",
      "Embedded training & mentoring",
      "Delivery-risk governance",
    ],
    accent: "blue" as const,
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

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:pt-28">
        <div className="grid-bg absolute inset-0" />
        <div className="glow-orb" style={{ width: 420, height: 420, top: -120, left: -80, background: "var(--blue)" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow mb-5">Senior QA & Software Testing Consultancy</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.05] tracking-tight text-white">
              Build Better Software Quality —{" "}
              <span className="gradient-text">Not Just More Tests</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Inside STLC helps software teams improve QA strategy, reduce
              delivery risk, build sustainable test automation capability, and
              develop the testing skills needed for modern delivery.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a QA Discovery Call <ArrowRight size={16} />
              </Link>
              <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Explore Inside STLC Academy <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-8 text-sm text-dim leading-relaxed max-w-lg border-l-2 pl-4"
              style={{ borderColor: "var(--green)" }}>
              Led by 26+ years of real-world software testing, QA leadership,
              hiring, coaching, and delivery experience.
            </p>
          </div>
          <div className="floaty">
            <HeroVisual />
          </div>
        </div>
      </section>

      <TrustBlock />

      {/* ---------- The Problem ---------- */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="panel-glow p-8 sm:p-12 relative overflow-hidden">
            <div className="icon-tile green mb-6">
              <AlertTriangle size={22} />
            </div>
            <span className="eyebrow no-rule mb-3" style={{ color: "var(--green)" }}>The Problem</span>
            <h2 className="section-title max-w-3xl mb-5">
              Shipping fast, but quality confidence is low.
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              Many teams are releasing quickly, yet confidence in quality is
              low. Testing is often reactive, automation is fragile, and QA
              teams are under pressure to prove their value in an AI-enabled
              world. The result is rising delivery risk and a growing gap
              between how fast you ship and how safe it feels.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- What Inside STLC Helps With ---------- */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">What Inside STLC Helps With</span>
            <h2 className="section-title">Practical support across the QA lifecycle</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpCards.map((c) => (
              <ServiceCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Consultancy Engagements ---------- */}
      <section id="engagements" className="px-4 py-24" style={{ background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Consultancy Engagements</span>
            <h2 className="section-title">Ways to work together</h2>
            <p className="section-subtitle mx-auto mt-3">
              Every engagement is scoped to your team, risk profile and delivery
              goals — and built to leave you stronger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagements.map((e) => (
              <div key={e.name} className="card flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`icon-tile ${e.accent === "green" ? "green" : ""}`}>
                    <e.icon size={20} />
                  </div>
                  <span className={`chip ${e.accent === "green" ? "chip-green" : ""}`}>{e.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{e.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">{e.description}</p>
                <ul className="space-y-2.5 mb-6 mt-auto">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: e.accent === "green" ? "var(--green)" : "var(--blue-bright)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-outline btn-sm justify-center">
                  Discuss this engagement <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Example Engagement / Case Study ---------- */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow mb-3">Example Engagement</span>
            <h2 className="section-title mb-4">
              Building Sustainable Test Automation Capability
            </h2>
            <p className="section-subtitle">
              A three-phase model designed to enable your internal team — not to
              create dependency on an outside consultant. The goal is a
              framework your testers and developers can own, maintain and grow
              long after the engagement ends.
            </p>
          </div>
          <PhaseFlow phases={phases} />
          <div className="mt-8 flex items-start gap-4 panel p-6">
            <Quote size={28} className="flex-shrink-0 mt-1" style={{ color: "var(--blue-bright)" }} />
            <p className="text-muted leading-relaxed">
              <span className="text-white font-medium">The outcome that matters:</span>{" "}
              internal testers who can write, run and maintain reliable
              automation; a strategy the whole team understands; and a measurable
              drop in delivery risk — capability that stays with you.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Academy Integration ---------- */}
      <section className="px-4 py-24" style={{ background: "linear-gradient(180deg, var(--navy-950), var(--navy-900))" }}>
        <div className="max-w-6xl mx-auto">
          <div className="panel-glow grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12">
            <div>
              <span className="eyebrow no-rule mb-3" style={{ color: "var(--green)" }}>Academy</span>
              <h2 className="section-title mb-4">
                Consultancy Backed by Practical QA Training
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Inside STLC Academy gives teams access to structured QA learning
                pathways, including software testing fundamentals, AI for QA,
                interview preparation, and modern test automation.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Software testing fundamentals",
                  "AI for QA",
                  "Interview preparation",
                  "Modern test automation",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
                  View the Academy <ArrowUpRight size={16} />
                </a>
                <Link href="/academy" className="btn-outline">
                  How it supports your team
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "12", k: "Structured modules" },
                { v: "AI for QA", k: "Dedicated track" },
                { v: "Interview", k: "Prep pathway" },
                { v: "Hands-on", k: "Assignments & templates" },
              ].map((s) => (
                <div key={s.k} className="card text-center">
                  <p className="text-2xl font-bold gradient-text">{s.v}</p>
                  <p className="text-sm text-muted mt-1">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About David ---------- */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="grid place-items-center w-28 h-28 rounded-2xl text-4xl font-black text-white mx-auto"
            style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
            DO
          </div>
          <div>
            <span className="eyebrow mb-3">About Inside STLC</span>
            <h2 className="section-title mb-4">Led by David Oxley</h2>
            <p className="text-muted leading-relaxed mb-5">
              Inside STLC is led by David Oxley, with 26+ years in software
              testing and QA leadership — including hiring, coaching and leading
              testers across diverse products and sectors. The approach is
              practical and delivery-focused, with a strong emphasis on risk,
              judgement, automation, AI, and real-world outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline btn-sm">More about David <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Free Resources (secondary) ---------- */}
      <section className="px-4 py-20" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow no-rule mb-3">Free Resources</span>
              <h2 className="section-title">Practical QA guides, at no cost</h2>
            </div>
            <Link href="/resources" className="btn-outline btn-sm">
              See all resources <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {freeResources.slice(0, 3).map((r) => (
              <ResourceCard key={r.title} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="panel-glow relative overflow-hidden p-8 sm:p-14 text-center">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative">
              <span className="eyebrow no-rule mb-4 justify-center">Let&apos;s talk</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Let&apos;s Improve Your QA Capability
              </h2>
              <p className="section-subtitle mx-auto mb-9">
                Book a discovery call to talk through your delivery goals, where
                quality confidence is low, and the fastest route to reducing risk.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call <ArrowRight size={16} />
              </Link>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm">
                <a href="mailto:david.oxley@insidestlc.com" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors">
                  <Mail size={16} style={{ color: "var(--blue-bright)" }} /> david.oxley@insidestlc.com
                </a>
                <a href="tel:01144701365" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors">
                  <Phone size={16} style={{ color: "var(--blue-bright)" }} /> 0114 470 1365
                </a>
                <span className="inline-flex items-center gap-2 text-muted">
                  <MapPin size={16} style={{ color: "var(--blue-bright)" }} /> Sheffield, UK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
