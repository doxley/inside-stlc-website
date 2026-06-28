import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe2, ArrowUpRight, LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const LINKEDIN_URL = "https://www.linkedin.com/in/davidoxley-qa/";

type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export const metadata: Metadata = {
  title: "Contact | Book a QA Discovery Call",
  description:
    "Book a QA discovery call with Inside STLC to discuss QA strategy, test automation capability, AI for QA or team upskilling. Sheffield, UK.",
};

const contactDetails: ContactDetail[] = [
  { icon: Mail, label: "Email", value: "david.oxley@insidestlc.com", href: "mailto:david.oxley@insidestlc.com" },
  { icon: Phone, label: "Phone", value: "0114 470 1365", href: "tel:01144701365" },
  { icon: MapPin, label: "Location", value: "Sheffield, UK", href: undefined },
  { icon: Globe2, label: "LinkedIn", value: "David Oxley", href: LINKEDIN_URL, external: true },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-12 sm:pt-24">
        <div className="grid-bg absolute inset-0" />
        <div className="glow-orb" style={{ width: 360, height: 360, top: -120, left: "50%", background: "var(--blue)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="eyebrow no-rule mb-4 justify-center">Get in touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            Let&apos;s Improve Your <span className="gradient-text">QA Capability</span>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Tell us about your team, your delivery goals and where quality
            confidence is low. Book a discovery call and David will be in touch
            within 1–2 business days — no hard sell.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 panel p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Book a Discovery Call</h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="panel p-6">
              <h2 className="text-lg font-bold text-white mb-5">Contact details</h2>
              <ul className="space-y-4">
                {contactDetails.map((c) => {
                  const inner = (
                    <>
                      <div className="icon-tile flex-shrink-0"><c.icon size={18} /></div>
                      <div>
                        <p className="font-medium text-sm text-white">{c.label}</p>
                        <p className="text-sm text-muted inline-flex items-center gap-1">
                          {c.value}{c.external && <ArrowUpRight size={12} />}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 group">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="panel-glow p-6">
              <h3 className="font-semibold mb-2 text-blue">What to expect</h3>
              <p className="text-muted text-sm leading-relaxed">
                An informal conversation to understand your situation, your
                delivery risks and whether there&apos;s a good fit — followed by a
                clear, practical view of where the biggest QA improvements can be
                made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
