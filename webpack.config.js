var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        //include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      chunks: 'initial',
    }
  },
  output: {
    filename: 'bundle.[contenthash].js', 
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'public/index.html'
  })],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};