var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'public/index.html'
  })],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    // Display only errors to reduce the amount of output.
    contentBase: path.join(__dirname, "../dist/"),
    stats: "errors-only",
    compress: true,
    host: '0.0.0.0', // Defaults to `localhost`
    port: 5000, // Defaults to 8080
    open: true, // Open the page in browser
  }
};