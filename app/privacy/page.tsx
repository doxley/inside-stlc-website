import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Inside STLC collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        subtitle="How Inside STLC handles the personal information you share with us."
      />
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto prose-invert space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Who we are</h2>
            <p>Inside STLC is a QA and software testing consultancy based in Sheffield, UK, led by David Oxley. You can contact us at <a className="text-blue" href="mailto:david.oxley@insidestlc.com">david.oxley@insidestlc.com</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">What we collect</h2>
            <p>When you contact us or book a discovery call, we collect the details you provide — typically your name, email address, company and a description of your enquiry. We do not collect special category data.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">How we use it</h2>
            <p>We use your information solely to respond to your enquiry, provide the services you request and keep in touch about relevant QA topics if you have asked us to. We do not sell your data.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Your rights</h2>
            <p>You can ask us to access, correct or delete the personal data we hold about you, or to stop contacting you, at any time. Email <a className="text-blue" href="mailto:david.oxley@insidestlc.com">david.oxley@insidestlc.com</a> and we will respond promptly.</p>
          </div>
          <p className="text-sm text-dim">This is a general privacy notice and should be reviewed by the site owner before launch to ensure it reflects actual data-processing practices and meets UK GDPR requirements.</p>
        </div>
      </section>
    </>
  );
}
