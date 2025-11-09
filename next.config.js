/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    experimental: {
      serverActions: false,
    },
    webpack: (config) => {
      // Impede o Next de tentar gerar páginas para rotas API
      config.externals.push({ './src/app/api/loader/route.ts': 'commonjs ./src/app/api/loader/route.ts' });
      return config;
    },
  };
  
  module.exports = nextConfig;