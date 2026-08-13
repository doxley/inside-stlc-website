import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { clients, clientSectors, type Client } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Clients — QA & Test Delivery Track Record",
  description:
    "Organisations Inside STLC has delivered software testing, QA leadership and test automation for — across government, finance, gaming, logistics and public-sector digital.",
};

const featured = clients.find((c) => c.featured);
const rest = clients.filter((c) => !c.featured);

/* A branded logo tile — real logo image if provided, else a styled wordmark. */
function LogoTile({ c }: { c: Client }) {
  return (
    <div className="group flex items-center gap-3.5 px-5 py-4 bg-navy-950 min-h-[84px]">
      {c.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={c.logo}
          alt={`${c.name} logo`}
          className="max-h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        />
      ) : (
        <>
          <span
            className="grid place-items-center flex-shrink-0 h-10 min-w-10 px-2 rounded-lg text-sm font-black text-white"
            style={{
              background:
                c.accent === "green"
                  ? "linear-gradient(135deg, var(--green), #0e9e77)"
                  : "linear-gradient(135deg, var(--blue), #1d4ed8)",
            }}
          >
            {c.monogram}
          </span>
          <span className="text-[0.95rem] font-semibold text-white leading-tight tracking-tight">
            {c.name}
          </span>
        </>
      )}
    </div>
  );
}

export default function ClientsPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-24">
        <div className="grid-bg absolute inset-0" />
        <div
          className="glow-orb"
          style={{ width: 400, height: 400, top: -140, right: -60, background: "var(--blue)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="eyebrow no-rule mb-4 justify-center">Clients</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            Clients We&apos;ve <span className="gradient-text">Worked With</span>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Across government, finance, gaming, logistics and public-sector
            digital, Inside STLC has led QA, test management and automation on
            complex, high-risk programmes — backed by 20+ years of hands-on
            delivery.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Discuss your programme <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Logo wall ---------- */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center eyebrow no-rule justify-center mb-6">
            Trusted on programmes for
          </p>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px panel overflow-hidden"
            style={{ background: "var(--line)" }}
          >
            {clients.map((c) => (
              <LogoTile key={c.slug} c={c} />
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-dim max-w-2xl mx-auto leading-relaxed">
            Organisations where Inside STLC&apos;s founder has led QA, test
            management and automation delivery. Logos and names remain the
            property of their respective owners.
          </p>
        </div>
      </section>

      {/* ---------- Sectors breadth ---------- */}
      <section className="px-4 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow no-rule mb-4 justify-center" style={{ color: "var(--green)" }}>
            Sector Experience
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {clientSectors.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured engagement (Vivedia) ---------- */}
      {featured && (
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="panel-glow grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center p-8 sm:p-12">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="grid place-items-center h-12 min-w-12 px-2.5 rounded-xl text-lg font-black text-white"
                    style={{ background: "linear-gradient(135deg, var(--green), #0e9e77)" }}
                  >
                    {featured.monogram}
                  </span>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">{featured.name}</p>
                    <p className="text-sm text-dim">{featured.sector}</p>
                  </div>
                </div>
                <span className="chip chip-green mb-4">Featured Inside STLC engagement</span>
                <h2 className="section-title mb-4">Building Sustainable Test Automation Capability</h2>
                <p className="text-muted leading-relaxed mb-6">{featured.summary}</p>
                <ul className="space-y-3 mb-8">
                  {featured.involved.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted">
                      <Check size={17} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/automation-capability" className="btn-green">
                  See our automation approach <ArrowRight size={16} />
                </Link>
              </div>
              <div className="flex items-start gap-4 panel p-6">
                <Quote size={28} className="flex-shrink-0 mt-1" style={{ color: "var(--green)" }} />
                <p className="text-muted leading-relaxed">
                  <span className="text-white font-medium">The outcome that matters:</span>{" "}
                  a test automation framework the team can write, run and maintain
                  themselves — a strategy the whole team understands, and capability
                  that stays in-house long after the engagement ends.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Engagement detail cards ---------- */}
      <section className="px-4 pb-24" style={{ background: "linear-gradient(180deg, var(--navy-900), var(--navy-950))" }}>
        <div className="max-w-6xl mx-auto pt-20">
          <div className="text-center mb-12">
            <span className="eyebrow no-rule mb-3">Selected Engagements</span>
            <h2 className="section-title">What we were involved in</h2>
            <p className="section-subtitle mx-auto mt-3">
              A snapshot of QA and test delivery across regulated, high-scale and
              public-sector programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((c) => (
              <div key={c.slug} className="card flex flex-col">
                <div className="flex items-center gap-3.5 mb-4">
                  <span
                    className="grid place-items-center flex-shrink-0 h-11 min-w-11 px-2 rounded-lg text-sm font-black text-white"
                    style={{
                      background:
                        c.accent === "green"
                          ? "linear-gradient(135deg, var(--green), #0e9e77)"
                          : "linear-gradient(135deg, var(--blue), #1d4ed8)",
                    }}
                  >
                    {c.monogram}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white leading-tight">{c.name}</h3>
                    <p className="text-xs text-dim">
                      {c.sector} · {c.period}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-blue mb-1">{c.role}</p>
                <p className="text-sm text-muted leading-relaxed mb-5">{c.summary}</p>

                <ul className="space-y-2.5 mb-5">
                  {c.involved.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: c.accent === "green" ? "var(--green)" : "var(--blue-bright)" }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {c.tags.map((t) => (
                    <span key={t} className={`chip ${c.accent === "green" ? "chip-green" : ""}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-dim max-w-2xl mx-auto leading-relaxed">
            Earlier senior QA and testing roles from 2000–2015 span government,
            education, retail and financial services — available on request.
          </p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="panel-glow relative overflow-hidden p-8 sm:p-14 text-center">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="icon-tile mx-auto mb-5">
                <ShieldCheck size={22} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Add your team to the list
              </h2>
              <p className="section-subtitle mx-auto mb-9">
                Whether it&apos;s test strategy, automation capability or delivery
                risk, Inside STLC brings the same senior, hands-on QA leadership to
                your programme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Book a Discovery Call <ArrowRight size={16} />
                </Link>
                <Link href="/consulting" className="btn-outline">
                  Explore consulting <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
