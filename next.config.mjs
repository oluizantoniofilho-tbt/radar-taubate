
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // força Webpack
  },

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

export default nextConfig;

