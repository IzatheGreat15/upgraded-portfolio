const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // Other configuration options

  module: {
    rules: [
      // Vue component loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // Other loaders
      // ...
    ],
  },

  plugins: [
    // Vue Loader plugin
    new VueLoaderPlugin(),
  ],
};
