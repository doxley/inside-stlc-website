import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, PlayCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const ACADEMY_URL = "https://www.insidestlcacademy.com/";
const LINKEDIN_URL = "https://www.linkedin.com/in/davidoxley-qa/";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCWDqPmDOlZm_tPOBasv4OWA";

export const metadata: Metadata = {
  title: "About David Oxley | QA Consultant & Educator",
  description:
    "Inside STLC is led by David Oxley, with 26+ years in software testing, QA leadership, hiring, coaching and building sustainable QA capability for delivery teams.",
};

const experience = [
  "26+ years in software testing and QA leadership",
  "Hiring, coaching and leading testers across diverse products",
  "Test automation strategy and implementation",
  "QA team leadership in regulated and sensitive sectors",
  "Building testing teams and capability from scratch",
  "Practical AI adoption and modern testing approaches",
  "Creating training through YouTube and Inside STLC Academy",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Inside STLC"
        title={<>26+ years of <span className="gradient-text">real-world QA</span>, not certification theory</>}
        subtitle="Inside STLC is led by David Oxley — a practical, delivery-focused QA consultant with a strong focus on risk, judgement, automation, AI and real-world outcomes."
      />

      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="grid place-items-center w-24 h-24 rounded-2xl text-3xl font-black text-white mb-6"
              style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
              DO
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">David Oxley</h2>
            <p className="text-sm font-medium mb-5 text-blue">QA Consultant, Educator &amp; Content Creator</p>
            <div className="flex gap-3 mb-7">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
                <Globe2 size={18} /> LinkedIn
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
                <PlayCircle size={18} /> YouTube
              </a>
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Inside STLC is led by David Oxley — a QA and software testing
                professional with over 26 years of hands-on experience spanning
                manual testing, automation strategy, QA leadership, hiring and
                building teams, and supporting organisations through real quality
                challenges.
              </p>
              <p>
                The name Inside STLC reflects a belief that good QA is embedded
                throughout the software testing lifecycle — from requirements to
                release — not bolted on as a final checkbox.
              </p>
              <p>
                The approach is always practical and delivery-focused. The goal
                is to leave your team stronger, more capable and more confident
                in their own testing — building capability, not dependency.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-5">Experience &amp; background</h3>
            <ul className="space-y-3 mb-8">
              {experience.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                  {e}
                </li>
              ))}
            </ul>

            <div className="panel-glow p-6">
              <h3 className="font-semibold mb-2 text-blue">The Inside STLC philosophy</h3>
              <p className="text-muted text-sm leading-relaxed">
                Good testing is practical, proportionate and embedded — not
                ceremonial. Every engagement is focused on genuine, lasting
                improvement and real quality capability, not paper processes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/consulting" className="btn-outline btn-sm">Explore Consulting</Link>
              <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                Visit Academy <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Work with David directly"
        subheading="Whether you need QA strategy, automation capability or help building your team — let's talk."
        buttonLabel="Book a Discovery Call"
        buttonHref="/contact"
      />
    </>
  );
}
