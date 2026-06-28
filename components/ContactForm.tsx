"use client";
import { useState } from "react";
import { Send, AlertCircle } from "lucide-react";

const fieldClass =
  "w-full px-4 py-3 rounded-lg text-sm bg-white/5 border border-line text-white placeholder:text-dim focus:outline-none focus:border-blue-400 focus:ring-2 transition";
const ringStyle = { "--tw-ring-color": "rgba(47,107,255,0.35)" } as React.CSSProperties;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
      budget: fd.get("budget"),
      website: fd.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email david.oxley@insidestlc.com directly."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="icon-tile green w-16 h-16 mx-auto mb-4">
          <Send size={26} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
        <p className="text-muted">
          Thanks for reaching out. David will be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-muted mb-1.5" htmlFor="name">
            Name <span style={{ color: "var(--blue-bright)" }}>*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name"
            className={fieldClass} style={ringStyle} />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1.5" htmlFor="company">
            Company
          </label>
          <input id="company" name="company" type="text" placeholder="Your company (optional)"
            className={fieldClass} style={ringStyle} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted mb-1.5" htmlFor="email">
          Email <span style={{ color: "var(--blue-bright)" }}>*</span>
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com"
          className={fieldClass} style={ringStyle} />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted mb-1.5" htmlFor="message">
          What QA challenge can we help with? <span style={{ color: "var(--blue-bright)" }}>*</span>
        </label>
        <textarea id="message" name="message" required rows={5}
          placeholder="Tell us about your team, your delivery goals and where quality confidence is low..."
          className={`${fieldClass} resize-none`} style={ringStyle} />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted mb-1.5" htmlFor="budget">
          Budget / timeline (optional)
        </label>
        <input id="budget" name="budget" type="text" placeholder="e.g. discovery review, Q3, ongoing partnership..."
          className={fieldClass} style={ringStyle} />
      </div>

      {error && (
        <div className="flex items-start gap-2 text-sm rounded-lg px-4 py-3"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }}>
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
        {loading ? "Sending..." : "Book a Discovery Call"}
        {!loading && <Send size={16} />}
      </button>
    </form>
  );
}
