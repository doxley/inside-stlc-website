// Site-wide structured data (JSON-LD) for richer search results.
const SITE = "https://www.insidestlc.com";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE}/#organization`,
      name: "Inside STLC",
      alternateName: "Inside STLC QA Consultancy",
      url: SITE,
      logo: `${SITE}/icon.svg`,
      image: `${SITE}/opengraph-image`,
      slogan: "Test Smarter. Grow Faster.",
      description:
        "QA consultancy and training: QA strategy, sustainable test automation capability, AI for QA, and team upskilling — led by 26+ years of real-world software testing and QA leadership.",
      email: "david.oxley@insidestlc.com",
      telephone: "+44-114-470-1365",
      founder: { "@id": `${SITE}/#david-oxley` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressCountry: "GB",
      },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      knowsAbout: [
        "Software Testing",
        "Quality Assurance",
        "Test Automation",
        "Playwright",
        "AI for QA",
        "QA Strategy",
        "Test Management",
      ],
      sameAs: [
        "https://www.linkedin.com/in/davidoxley-qa/",
        "https://www.youtube.com/channel/UCWDqPmDOlZm_tPOBasv4OWA",
        "https://www.insidestlcacademy.com/",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#david-oxley`,
      name: "David Oxley",
      jobTitle: "QA Consultant, Educator & Founder",
      worksFor: { "@id": `${SITE}/#organization` },
      description:
        "QA and software testing professional with 26+ years of hands-on experience across manual testing, automation strategy, QA leadership, hiring and team building.",
      sameAs: [
        "https://www.linkedin.com/in/davidoxley-qa/",
        "https://www.youtube.com/channel/UCWDqPmDOlZm_tPOBasv4OWA",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Inside STLC",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
