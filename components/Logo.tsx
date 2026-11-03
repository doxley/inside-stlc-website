import Link from "next/link";

/**
 * Brand mark — the Inside STLC teal circle-check.
 * Pure inline SVG so it stays crisp at any size and themes with the palette.
 */
export function BrandMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Inside STLC"
    >
      <circle cx="24" cy="24" r="22" fill="var(--teal)" />
      <path
        d="M14.5 24.5 L21 31 L34 17.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Full lock-up: mark + "Inside STLC" wordmark.
 * "Inside" in white, "STLC" in brand gold.
 */
export default function Logo({
  href = "/",
  markSize = 32,
}: {
  href?: string | null;
  markSize?: number;
}) {
  const lockup = (
    <span className="flex items-center gap-2.5">
      <BrandMark size={markSize} />
      <span className="text-lg font-bold tracking-tight text-white leading-none">
        Inside <span style={{ color: "var(--gold)" }}>STLC</span>
      </span>
    </span>
  );

  if (href === null) return lockup;
  return (
    <Link href={href} aria-label="Inside STLC — home">
      {lockup}
    </Link>
  );
}
