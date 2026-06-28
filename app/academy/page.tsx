import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowUpRight, BookOpen, Bot, Briefcase, Cog } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const ACADEMY_URL = "https://www.insidestlcacademy.com/";

export const metadata: Metadata = {
  title: "Inside STLC Academy | QA Training & Team Upskilling",
  description:
    "Inside STLC Academy gives teams structured QA learning pathways — software testing fundamentals, AI for QA, interview preparation and modern test automation — supporting the consultancy offer.",
};

const pathways = [
  { icon: BookOpen, title: "Software Testing Fundamentals", description: "Structured foundations covering the full software testing lifecycle, from requirements to release." },
  { icon: Bot, title: "AI for QA", description: "A dedicated track on using AI in testing practically and responsibly — built for modern delivery." },
  { icon: Briefcase, title: "Interview Preparation", description: "Targeted preparation for QA and testing interviews, including what interviewers really look for." },
  { icon: Cog, title: "Modern Test Automation", description: "Practical automation learning that complements hands-on coaching during consultancy engagements." },
];

const teamUpskilling = [
  "Bespoke team training mapped to your tools and goals",
  "Tester development pathways from manual to automation",
  "Manual-to-automation progression for existing testers",
  "QA leadership coaching for leads and managers",
  "Academy-supported learning routes alongside consultancy",
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="QA Training & Team Upskilling"
        title={<>Consultancy backed by <span className="gradient-text">practical QA training</span></>}
        subtitle="Inside STLC Academy gives teams access to structured QA learning pathways, including software testing fundamentals, AI for QA, interview preparation, and modern test automation."
      />

      <section className="px-4 -mt-2 mb-4">
        <div className="max-w-3xl mx-auto text-center flex flex-wrap justify-center gap-4">
          <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View the Academy <ArrowUpRight size={16} />
          </a>
          <Link href="/contact" className="btn-outline">Discuss team training</Link>
        </div>
      </section>

      {/* Pathways */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Learning pathways</span>
            <h2 className="section-title">Structured routes for every tester</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pathways.map((p) => (
              <div key={p.title} className="card">
                <div className="icon-tile green mb-4"><p.icon size={20} /></div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team upskilling */}
      <section className="px-4 py-20" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-5xl mx-auto panel-glow grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12">
          <div>
            <div className="icon-tile mb-5"><GraduationCap size={22} /></div>
            <span className="eyebrow no-rule mb-3">Team upskilling</span>
            <h2 className="section-title mb-4">Develop your testers, not just your tools</h2>
            <p className="text-muted leading-relaxed">
              The Academy is a credibility asset and a learning route that
              supports consultancy work — so the capability built during an
              engagement keeps growing long after it ends.
            </p>
          </div>
          <ul className="space-y-3">
            {teamUpskilling.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--green)" }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Upskill your QA team"
        subheading="Combine consultancy with Academy-supported learning routes to build lasting testing capability inside your team."
        buttonLabel="Book a Discovery Call"
        buttonHref="/contact"
        secondaryLabel="View Free Resources"
        secondaryHref="/resources"
      />
    </>
  );
}
