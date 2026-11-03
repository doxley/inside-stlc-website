import { ImageResponse } from "next/og";

export const alt = "Inside STLC — Test Smarter. Grow Faster.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share image for the whole site.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #061826 0%, #0a2236 55%, #0d2a43 100%)",
          color: "#eaf1f8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand lock-up */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="#14b890" />
            <path
              d="M14.5 24.5 L21 31 L34 17.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 800 }}>
            <span style={{ color: "#ffffff" }}>Inside&nbsp;</span>
            <span style={{ color: "#f5b31c" }}>STLC</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 48,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 940,
          }}
        >
          <span>Test Smarter.&nbsp;</span>
          <span style={{ color: "#2ad6a6" }}>Grow Faster.</span>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#9fb1c6",
            fontWeight: 500,
          }}
        >
          QA Consultancy · Test Automation · AI for QA · Training
        </div>

        {/* Accent bar */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            height: 10,
            width: 260,
            borderRadius: 999,
            background: "linear-gradient(90deg, #14b890 0%, #f5b31c 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
