module.exports = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 200,
        };
      }
  
      return config;
    },
  }
  