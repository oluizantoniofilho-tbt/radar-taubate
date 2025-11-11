/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Usa Turbopack por padrão no dev, mas builda com webpack estavelmente
  experimental: {
    turbo: {
      rules: {},
    },
  },

  webpack(config, { isServer }) {
    if (isServer) {
      // Evita empacotar módulos que dependem de fs, path etc.
      config.externals.push({
        './src/app/api/loader/route.ts': 'commonjs ./src/app/api/loader/route.ts',
      });
    }
    return config;
  },
};

export default nextConfig;