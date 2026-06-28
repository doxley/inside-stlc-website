const stats = [
  { v: "26+", k: "Years in software testing & QA leadership" },
  { v: "12", k: "Structured Academy learning modules" },
  { v: "Risk-led", k: "Strategy focused on delivery confidence" },
  { v: "Capability", k: "Built in your team — not dependency" },
];

export default function TrustBlock() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px panel overflow-hidden"
          style={{ background: "var(--line)" }}>
          {stats.map((s) => (
            <div key={s.k} className="p-6 sm:p-8 bg-navy-950">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</p>
              <p className="mt-2 text-sm text-muted leading-snug">{s.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
