import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="panel-glow relative overflow-hidden px-6 sm:px-12 py-14 text-center">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className="section-subtitle mx-auto mb-9">{subheading}</p>
            )}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={buttonHref} className="btn-primary">
                {buttonLabel}
                <ArrowRight size={16} />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref} className="btn-outline">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
