/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Impede o Next de empacotar APIs que usam fs/pdf-parse
    if (isServer) {
      config.externals.push({ "./src/app/api/loader/route.ts": "commonjs ./src/app/api/loader/route.ts" });
    }
    return config;
  },
  experimental: {
    // ⚙️ Força o uso do Webpack em vez do Turbopack
    turbo: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;