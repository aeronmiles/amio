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

module.exports = {
  resolve: {
    alias: {
      'uikit-util': path.resolve(__dirname, 'src/js/uikit/js/util/index.js')
    },
    extensions: ['.js'],
  },
  optimization: {
    // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    minimizer: [],
  },
  mode: 'production',
  watch: true,
  entry: ['./src/js/app.js', './src/css/app.scss'],
  output: {
    path: path.resolve(__dirname, 'wwwroot/'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
        { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
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
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
};