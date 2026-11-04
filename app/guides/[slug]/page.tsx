import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Download,
  Clock,
  CheckCircle2,
  X,
  Check,
  HelpCircle,
} from 'lucide-react';
import { GUIDES, getGuide, type GuideBlock } from '@/lib/guides';
import CTASection from '@/components/CTASection';

const SITE = 'https://www.insidestlc.com';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: 'article',
      title: guide.metaTitle,
      description: guide.description,
      url: `${SITE}/guides/${guide.slug}`,
    },
  };
}

function Blocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className="text-muted leading-relaxed mb-4">
              {block.text}
            </p>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-2.5 mb-5">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted leading-relaxed">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--teal-bright)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'steps') {
          return (
            <ol key={i} className="space-y-3 mb-6">
              {block.items.map((item, n) => (
                <li key={item.label} className="card flex items-start gap-4 py-4">
                  <span
                    className="grid place-items-center flex-shrink-0 w-9 h-9 rounded-xl text-sm font-black text-white"
                    style={{ background: 'linear-gradient(135deg, var(--teal), #0b8f6d)' }}
                  >
                    {n + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-muted leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          );
        }
        // contrast
        return (
          <div key={i} className="panel p-5 sm:p-6 mb-6 space-y-4">
            <div className="flex items-start gap-3">
              <X size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#f0736a' }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-dim mb-1">Weak answer</p>
                <p className="text-sm text-muted leading-relaxed">{block.weak}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--teal-bright)' }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--teal-bright)' }}>
                  Strong answer
                </p>
                <p className="text-sm text-white leading-relaxed">{block.strong}</p>
              </div>
            </div>
            <div className="hairline pt-3 flex items-start gap-3">
              <HelpCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
              <p className="text-sm text-muted leading-relaxed">
                <span className="font-semibold" style={{ color: 'var(--gold)' }}>What they&apos;re really testing: </span>
                {block.testing}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guide.relatedSlugs
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        author: { '@type': 'Person', name: 'David Oxley' },
        publisher: {
          '@type': 'Organization',
          name: 'Inside STLC',
          logo: { '@type': 'ImageObject', url: `${SITE}/icon.svg` },
        },
        mainEntityOfPage: `${SITE}/guides/${guide.slug}`,
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: `${SITE}/guides/${guide.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-16 pb-10 sm:pt-20">
        <div className="grid-bg absolute inset-0" />
        <div className="glow-orb" style={{ width: 360, height: 360, top: -140, right: -60, background: 'var(--teal)' }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-dim mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <span className="chip chip-green mb-4">{guide.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white leading-[1.1]">
            {guide.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-dim">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {guide.readTime}
            </span>
            <span>Updated {guide.updated}</span>
            <span>By David Oxley</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {guide.intro.map((p, i) => (
            <p key={i} className="text-lg text-muted leading-relaxed mb-5">{p}</p>
          ))}

          {/* Companion download */}
          {guide.pdf && (
            <div className="panel-glow p-5 sm:p-6 my-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="icon-tile flex-shrink-0"><Download size={18} /></div>
                <div>
                  <p className="font-semibold text-white text-sm">Free companion download</p>
                  <p className="text-sm text-muted">{guide.pdf.label} · {guide.pdf.size}</p>
                </div>
              </div>
              <a href={guide.pdf.file} download className="btn-primary btn-sm justify-center whitespace-nowrap">
                <Download size={14} /> Download PDF
              </a>
            </div>
          )}

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-9">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{section.heading}</h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}

          {/* Key takeaways */}
          <div className="panel-glow p-6 sm:p-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-5">Key takeaways</h2>
            <ul className="space-y-3">
              {guide.keyTakeaways.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted leading-relaxed">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--gold)' }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Frequently asked questions</h2>
            <div className="space-y-4">
              {guide.faqs.map((f) => (
                <div key={f.q} className="card">
                  <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <CTASection
        heading={guide.cta.heading}
        subheading={guide.cta.body}
        buttonLabel={guide.cta.primaryLabel}
        buttonHref={guide.cta.primaryHref}
        secondaryLabel={guide.cta.secondaryLabel}
        secondaryHref={guide.cta.secondaryHref}
      />

      {/* Related guides */}
      {related.length > 0 && (
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="card group flex flex-col">
                  <span className="chip chip-green mb-3 self-start">{r.category}</span>
                  <h3 className="font-semibold text-white leading-snug mb-2 group-hover:text-blue transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{r.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue">
                    Read guide <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
