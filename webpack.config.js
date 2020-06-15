const path = require('path');
const glob = require('glob-all');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

const GLOB_PATHS = [
  path.join(__dirname, 'Pages/**/*'),
  path.join(__dirname, 'Shared/**/*'),
  path.join(__dirname, 'wwwroot/js/app.js'),
  path.join(__dirname, 'wwwroot/index.html'),
]

const DLL_PATHS = [
  path.join(__dirname, 'bin/Debug/netstandard2.1/wwwroot/**/*'),
]

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // minimizer: [new TerserJSPlugin({})],
  },
  resolve: {
    alias: {
      'uikit-util': path.resolve(__dirname, 'src/js/uikit/js/util/index.js')
    },
    extensions: ['.js'],
  },
  entry: { 
    app: './src/js/app.js', 
    // preload: './src/lib/preloadjs/preload.js', 
    // three: './src/js/three.js', 
    // prism: './src/css/prism.scss'
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader']
        // { loader: "css-loader", options: { importLoaders: 1 } } ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // new PurgecssPlugin({
    //   paths: () => glob.sync(GLOB_PATHS, { nodir: true }),
    //   whitelistPatterns: [/\@.*$/]
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/lib/prism/prism.min.js', to: 'lib' },
    //   ],
    // }),
    // new CompressionPlugin({
    //   filename: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    // new CompressionPlugin({
    //   filename: '[path].br[query]',
    //   algorithm: 'brotliCompress',
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     level: 11,
    //   },
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],

  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "wwwroot"),
    open: true,
  },
};