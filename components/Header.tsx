"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/consulting", label: "Consulting" },
  { href: "/automation-capability", label: "Automation Capability" },
  { href: "/ai-for-qa", label: "AI for QA" },
  { href: "/academy", label: "Academy" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{ backgroundColor: "rgba(6, 10, 22, 0.82)" }}
      className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-8 h-8 rounded-lg text-sm font-black text-white"
              style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
              S
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Inside <span className="gradient-text">STLC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ color: isActive(link.href) ? "var(--blue-bright)" : "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex btn-primary btn-sm">
              Book a Discovery Call <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-line bg-navy-900">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                style={{ color: isActive(link.href) ? "var(--blue-bright)" : "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary btn-sm mt-2"
            >
              Book a Discovery Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
