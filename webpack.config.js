const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const LIBRARY_NAME = 'react-semantic-booster';
const extractPlugin = new ExtractTextPlugin({
  filename: `${LIBRARY_NAME}.min.css`,
});

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    extractPlugin,
  ],
};
