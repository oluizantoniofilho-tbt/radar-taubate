
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desativa totalmente o Turbopack
  experimental: {
    turbo: false,
  },

  // Força o Next.js a usar Webpack e não Turbopack
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        './src/app/api/loader/route.ts': 'commonjs ./src/app/api/loader/route.ts',
      });
    }
    return config;
  },
};

module.exports = nextConfig;
