const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const { UglifyJsPlugin } = webpack.optimize;
const plugins = [];
plugins.push(new UglifyJsPlugin({ minimize: true }));
// let outputFile;
// const env = process.env.NODE_ENV;
// if (env === 'production') {
//   plugins.push(new UglifyJsPlugin({ minimize: true }));
//   outputFile = 'index.min.js';
// } else {
//   outputFile = 'index.js';
// }

// const LIBRARY_NAME = 'reactSemanticBooster';

// const extractPlugin = new ExtractTextPlugin({
//   filename: `${LIBRARY_NAME}.min.css`,
// });

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'reactSemanticBooster',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins,
  externals: {
    react: 'react',
    'react-dom': 'ReactDOM',
    'prop-types': 'prop-types',
    'react-router-dom': 'react-router-dom',
    'styled-components': 'styled-components',
    'semantic-ui-react': 'semantic-ui-react',
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
