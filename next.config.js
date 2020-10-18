module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.resolve.extensions = [
      ...config.resolve.extensions,
      ...['.gql', '.graphql'],
    ];
    console.log('CONFIG: ', config.resolve.extensions);

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    // Important: return the modified config
    return config;
  },
};
