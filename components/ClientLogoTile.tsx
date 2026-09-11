"use client";

import { useState } from "react";
import type { Client } from "@/lib/clients";

/**
 * A logo wall tile. Renders the real logo (on a light card, so dark/coloured
 * marks stay visible on the navy theme) when `logo` is set and loads; otherwise
 * falls back to the branded monogram + wordmark. The fallback means a missing
 * logo file never shows a broken image.
 */
export default function ClientLogoTile({ c }: { c: Client }) {
  const [imgOk, setImgOk] = useState(true);
  const showImg = Boolean(c.logo) && imgOk;

  return (
    <div className="flex items-center justify-center px-5 py-5 bg-navy-950 min-h-[96px]">
      {showImg ? (
        <div className="flex items-center justify-center w-full h-16 rounded-xl bg-white px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.logo}
            alt={`${c.name} logo`}
            className="max-h-11 max-w-full w-auto object-contain"
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        </div>
      ) : (
        <div className="flex items-center gap-3.5 w-full">
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
        </div>
      )}
    </div>
  );
}
