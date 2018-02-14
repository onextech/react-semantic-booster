const path = require('path');


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
