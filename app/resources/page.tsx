import type { Metadata } from "next";
import ResourceCard from "@/components/ResourceCard";
import PageHero from "@/components/PageHero";
import { freeResources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Free QA & Software Testing Resources",
  description:
    "Free QA guides, playbooks and roadmaps from Inside STLC — including the QA Interview Playbook, a beginner's guide to AI in QA, and a 90-day QA roadmap.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Resources"
        title={<>Practical QA guides, <span className="gradient-text">at no cost</span></>}
        subtitle="Guides, playbooks and roadmaps to help you grow as a tester or improve your team's QA approach — drawn from real-world experience, not theory."
      />

      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {freeResources.map((r) => (
              <ResourceCard key={r.title} {...r} />
            ))}
          </div>

          {/* Email capture */}
          <div className="panel-glow mt-12 p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get new resources first</h2>
            <p className="text-muted mb-7 max-w-md mx-auto">
              New guides, checklists and templates are added regularly. Subscribe
              to get them as soon as they&apos;re published.
            </p>
            {/* TODO: wire up to email provider (Mailchimp, ConvertKit, Resend, etc.) */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/5 border border-line text-white placeholder:text-dim focus:outline-none focus:border-blue-400"
              />
              <button type="submit" className="btn-primary justify-center whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-dim mt-3">No spam. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
