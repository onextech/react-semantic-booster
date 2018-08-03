const path = require('path');
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add sass loader:
  config.module.rules.push(
    {
      test: /\.scss$/,
      include: path.resolve(__dirname, '../'),
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.less$/,
      include: path.resolve(__dirname, '../'),
      loaders: ['style-loader', 'css-loader', {
        loader: 'less-loader',
        options: { javascriptEnabled: true },
      }],
    },
  );

  return config;
};
