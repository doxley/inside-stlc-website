import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inside STLC — QA Consultancy & Training",
    short_name: "Inside STLC",
    description:
      "QA consultancy, test automation capability, AI for QA and team upskilling. Test Smarter. Grow Faster.",
    start_url: "/",
    display: "standalone",
    background_color: "#061826",
    theme_color: "#061826",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
