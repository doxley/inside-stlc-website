import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal information and terms for the Inside STLC website.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal Notice"
        title="Legal Notice"
        subtitle="Information about this website and the terms on which it is provided."
      />
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Site operator</h2>
            <p>This website is operated by Inside STLC, a QA and software testing consultancy led by David Oxley, based in Sheffield, UK. Contact: <a className="text-blue" href="mailto:david.oxley@insidestlc.com">david.oxley@insidestlc.com</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Content & accuracy</h2>
            <p>The content on this site is provided for general information about Inside STLC&apos;s consultancy, training and resources. While we aim to keep it accurate and up to date, it does not constitute professional advice and is provided without warranty of any kind.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Intellectual property</h2>
            <p>All branding, text and visual material on this site are the property of Inside STLC unless otherwise stated, and may not be reproduced without permission.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">External links</h2>
            <p>This site links to external services including Inside STLC Academy, YouTube and LinkedIn. Inside STLC is not responsible for the content or privacy practices of third-party websites.</p>
          </div>
          <p className="text-sm text-dim">This notice should be reviewed by the site owner before launch to ensure it reflects the correct legal entity and applicable terms.</p>
        </div>
      </section>
    </>
  );
}
