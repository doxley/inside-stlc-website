import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({ eyebrow, title, subtitle, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-24">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-orb" style={{ width: 380, height: 380, top: -140, right: -60, background: "var(--blue)" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="eyebrow no-rule mb-4 justify-center">{eyebrow}</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">{subtitle}</p>
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
