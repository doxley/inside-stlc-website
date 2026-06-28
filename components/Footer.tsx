import Link from "next/link";
import { Globe2, PlayCircle, Mail, ArrowUpRight } from "lucide-react";

const ACADEMY_URL = "https://www.insidestlcacademy.com/";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCWDqPmDOlZm_tPOBasv4OWA";
const LINKEDIN_URL = "https://www.linkedin.com/in/davidoxley-qa/";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-line text-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <span className="text-lg font-bold tracking-tight text-white">
              Inside <span className="gradient-text">STLC</span>
            </span>
            <p className="mt-3 text-sm font-medium text-dim">
              QA Consulting&nbsp;&nbsp;|&nbsp;&nbsp;Test Automation&nbsp;&nbsp;|&nbsp;&nbsp;AI for QA&nbsp;&nbsp;|&nbsp;&nbsp;Training
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Helping software teams improve quality strategy, reduce delivery
              risk, and build sustainable test automation capability — backed by
              26+ years of real-world testing and QA leadership.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="icon-tile w-10 h-10 transition-colors">
                <Globe2 size={18} />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="icon-tile w-10 h-10 transition-colors">
                <PlayCircle size={18} />
              </a>
              <a href="mailto:david.oxley@insidestlc.com" aria-label="Email"
                className="icon-tile w-10 h-10 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-sm">Consultancy</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/consulting" className="hover:text-white transition-colors">QA &amp; Test Strategy</Link></li>
              <li><Link href="/automation-capability" className="hover:text-white transition-colors">Automation Capability</Link></li>
              <li><Link href="/ai-for-qa" className="hover:text-white transition-colors">AI for QA</Link></li>
              <li><Link href="/consulting#engagements" className="hover:text-white transition-colors">Engagements</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book a Discovery Call</Link></li>
            </ul>
          </div>

          {/* Learn / connect */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4 text-sm">Learn &amp; Connect</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  Inside STLC Academy <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  YouTube <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              </li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Resources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-dim">
          <p>© {new Date().getFullYear()} Inside STLC. All rights reserved. Sheffield, UK.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
