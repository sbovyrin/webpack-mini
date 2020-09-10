const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-mini.js',
    library: 'webpack-mini',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  target: 'node',
  externals: [
    'clean-webpack-plugin',
    'html-webpack-plugin',
    'css-loader',
    'file-loader',
    'style-loader',
    'mini-css-extract-plugin'
  ]
}
