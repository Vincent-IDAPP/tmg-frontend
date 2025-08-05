/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 1000,        // vérifie les changements toutes les 1000ms
        aggregateTimeout: 300,
      };
      return config;
    },
  };

export default nextConfig;
