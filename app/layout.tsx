import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Inside STLC | QA Consultancy, Test Automation & AI Testing Strategy",
    template: "%s | Inside STLC",
  },
  description:
    "Inside STLC helps software teams improve QA strategy, reduce delivery risk, build sustainable test automation capability, and upskill testers for modern AI-enabled delivery.",
  metadataBase: new URL("https://insidestlc.com"),
  openGraph: {
    title:
      "Inside STLC | QA Consultancy, Test Automation & AI Testing Strategy",
    description:
      "QA strategy, sustainable test automation capability, AI for QA, and team upskilling — led by 26+ years of real-world software testing experience.",
    url: "https://insidestlc.com",
    siteName: "Inside STLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
