import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import PageHero from "@/components/PageHero";
import { freeResources, resourceCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Free QA & Software Testing Resources",
  description:
    "Free QA guides, checklists, roadmaps and prompt packs from Inside STLC — software tester roadmaps, Playwright interview prep, AI-for-QA prompt packs and the 5-point QA hiring framework. Instant PDF downloads, no sign-up.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Resources"
        title={<>Practical QA guides, <span className="gradient-text">free to download</span></>}
        subtitle="Roadmaps, checklists, cheat sheets and prompt packs to help you grow as a tester or sharpen your team's QA — drawn from 26+ years of real-world testing, not theory. No sign-up: just download."
      />

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Guides cross-link */}
          <Link href="/guides" className="panel-glow p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-between group">
            <div>
              <p className="font-semibold text-white">Prefer to read online? Explore the QA guides</p>
              <p className="text-sm text-muted mt-1">
                In-depth articles on becoming a tester, Playwright interviews and AI for QA — each with a free download.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all whitespace-nowrap">
              Read the guides <ArrowRight size={14} />
            </span>
          </Link>

          {resourceCategories.map((category) => {
            const items = freeResources.filter((r) => r.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-bold text-white">{category}</h2>
                  <span className="hairline flex-1 mt-1" />
                  <span className="text-sm text-dim">{items.length}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((r) => (
                    <ResourceCard key={r.title} {...r} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Newsletter / subscribe */}
          <div className="panel-glow p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get new resources first</h2>
            <p className="text-muted mb-7 max-w-md mx-auto">
              New guides, checklists and templates are added regularly. Subscribe
              to get them — plus practical QA tips — straight to your inbox.
            </p>
            <a
              href="https://inside-stlc.kit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe for updates
            </a>
            <p className="text-xs text-dim mt-3">No spam. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
