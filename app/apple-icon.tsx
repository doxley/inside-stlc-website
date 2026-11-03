import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — navy rounded field with the teal circle-check.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a2236",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="21" fill="#14b890" />
          <path
            d="M14.5 24.5 L21 31 L34 17.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
