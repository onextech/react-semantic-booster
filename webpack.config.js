const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.scss$/,
      //   use: extractPlugin.extract({
      //     use: [
      //       { loader: 'css-loader', options: { minimize: true } },
      //       'sass-loader',
      //     ],
      //   }),
      // },
    ],
  },
  // plugins: [
  //   new UglifyJsPlugin(),
  // ],
  externals: {
    // react: 'react',
    // 'react-dom': 'ReactDOM',
    // 'prop-types': 'prop-types',
    // 'react-router-dom': 'react-router-dom',
    // 'styled-components': 'styled-components',
    // 'semantic-ui-react': 'semantic-ui-react',
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
