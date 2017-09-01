const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '/../src/main')
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js','.scss', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/../public'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: []
}
