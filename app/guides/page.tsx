import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { GUIDES } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'QA Guides & Tutorials',
  description:
    'Practical, in-depth QA guides from Inside STLC — how to become a software tester, Playwright interview questions, AI prompts for testers and more. Written from 26+ years of real-world testing.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title={<>Practical QA guides, <span className="gradient-text">written to be useful</span></>}
        subtitle="In-depth, no-fluff guides on breaking into testing, automation, interviews and AI for QA — drawn from 26+ years of hands-on software testing and QA leadership."
      />

      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="card group flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-green">{g.category}</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-dim">
                  <Clock size={13} /> {g.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-blue transition-colors">
                {g.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed flex-1">{g.description}</p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                Read guide <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
