import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE = "https://www.insidestlc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:
      "Inside STLC | QA Consultancy, Test Automation & AI Testing Strategy",
    template: "%s | Inside STLC",
  },
  description:
    "Inside STLC helps software teams improve QA strategy, reduce delivery risk, build sustainable test automation capability, and upskill testers for modern AI-enabled delivery. Test Smarter. Grow Faster.",
  applicationName: "Inside STLC",
  authors: [{ name: "David Oxley" }],
  creator: "David Oxley",
  publisher: "Inside STLC",
  keywords: [
    "QA consultancy",
    "software testing consultant",
    "test automation",
    "Playwright",
    "AI for QA",
    "QA strategy",
    "test strategy",
    "QA training",
    "test automation capability",
    "QA leadership",
    "Sheffield",
    "UK",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE,
    siteName: "Inside STLC",
    title:
      "Inside STLC | QA Consultancy, Test Automation & AI Testing Strategy",
    description:
      "QA strategy, sustainable test automation capability, AI for QA, and team upskilling — led by 26+ years of real-world software testing. Test Smarter. Grow Faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside STLC | QA Consultancy & Test Automation",
    description:
      "QA strategy, test automation capability, AI for QA and team upskilling. Test Smarter. Grow Faster.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
