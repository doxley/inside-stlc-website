/* Abstract, brand-styled SVG visuals — no stock photography.
   Used to illustrate QA dashboards, test flows and automation capability. */

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="glow-orb"
        style={{ width: 280, height: 280, top: -40, right: -20, background: "var(--blue)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 220, height: 220, bottom: -30, left: -10, background: "var(--green)", opacity: 0.35 }}
      />
      <div className="panel-glow relative p-5 sm:p-6">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-3 text-xs text-dim">quality-dashboard</span>
          <span className="ml-auto chip chip-green">All gates green</span>
        </div>

        {/* stat row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { k: "Coverage", v: "92%", c: "var(--green)" },
            { k: "Flaky tests", v: "0.4%", c: "var(--blue-bright)" },
            { k: "Risk score", v: "Low", c: "var(--green)" },
          ].map((s) => (
            <div key={s.k} className="rounded-lg border border-line p-3" style={{ background: "rgba(255,255,255,0.02)" }}>
              <p className="text-[0.7rem] text-dim">{s.k}</p>
              <p className="text-lg font-bold" style={{ color: s.c }}>{s.v}</p>
            </div>
          ))}
        </div>

        {/* trend chart */}
        <div className="rounded-lg border border-line p-4 mb-4" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-muted">Release confidence — last 8 sprints</p>
            <span className="chip">+38%</span>
          </div>
          <svg viewBox="0 0 320 90" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,72 L40,66 L80,68 L120,54 L160,48 L200,36 L240,30 L280,18 L320,10 L320,90 L0,90 Z" fill="url(#area)" />
            <path d="M0,72 L40,66 L80,68 L120,54 L160,48 L200,36 L240,30 L280,18 L320,10"
              fill="none" stroke="var(--blue-bright)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="320" cy="10" r="3.5" fill="var(--green)" />
          </svg>
        </div>

        {/* pipeline steps */}
        <div className="flex items-center justify-between gap-2">
          {["Build", "Unit", "API", "E2E", "Release"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: i < 4 ? "var(--green)" : "var(--blue-bright)" }} />
                <span className="text-[0.68rem] text-muted whitespace-nowrap">{step}</span>
              </div>
              {i < 4 && <span className="h-px flex-1" style={{ background: "var(--line)" }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Phase {
  num: string;
  title: string;
  points: string[];
}

export function PhaseFlow({ phases }: { phases: Phase[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {phases.map((p, i) => (
        <div key={p.num} className="card flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl text-sm font-black text-white"
              style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
              {p.num}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-dim">
              Phase {i + 1}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
          <ul className="space-y-2 mt-auto">
            {p.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--green)" }} />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
