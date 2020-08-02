const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function applyDevConfig(port = 3000, isHot = true) {
  return {
    mode: 'development',
    // get better stack trace
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: isHot,
      host: '0.0.0.0',
      port: port,
      overlay: true
    },
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 1000
    }
  }
}

function applyProdConfig() {
  return {
    mode: 'production'
  }
}

function defaultConfig(extendFn = null) {
  return (env) => ({
    // result files: one pair -> one file
    entry: {
      app: './src/index'
    },
    output: {
      // [name] replaces to one of entry keys
      // [hash] hash of a file content
      filename: env.prod ? '[name].js' : '[name][hash].js',
      // location of result files 
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: env.prod ? '[name].css' : '[name].[hash].css'
      }),
      // auto-removing "dist" directory before every build
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {hmr: !env.prod, reloadAll: true, esModule: true}
            },
            {
              loader: 'css-loader',
              options: {import: true}
            }
          ],
          sideEffects: true
        },
        {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
      ]
    },
    optimization: {
      // webpack code as separate js file
      runtimeChunk: 'single',
      // app deps as separate js file
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          },
          styles: {
            test: /\.css$/,
            name: 'styles',
            chunks: 'all',
            enforce: true
          }
        }
      },
      // enable tree shaking
      usedExports: true
    },
    stats: {
      all: false,
      assets: true,
      assetsSort: '!size',
      // TODO: enable for webpack v5
      // orphanModules: true,
      warnings: true,
      errors: true,
      errorDetails: true,
      // TODO: enable for webpack v5
      // errorStack: true,
      performance: true,
      timings: true,
      usedExports: true
    },
    ...((env.prod) ? applyProdConfig() : applyDevConfig(env.port, env.hot)),
    ...(extendFn ? extendFn(env) : {})
  })
}

module.exports = { defaultConfig }
