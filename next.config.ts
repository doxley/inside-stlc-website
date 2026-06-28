import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/consulting", permanent: true },
      { source: "/automation", destination: "/automation-capability", permanent: true },
      { source: "/build-your-qa-team", destination: "/consulting#recruitment", permanent: true },
      { source: "/free-resources", destination: "/resources", permanent: true },
      { source: "/youtube", destination: "/resources", permanent: true },
      { source: "/PlayCircle", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
