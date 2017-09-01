const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config.js')

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
]

config.devServer = {
  contentBase: path.join(__dirname, '/../public'),
  disableHostCheck: true,
  hot: true,
  historyApiFallback: true
}

config.devtool ='inline-source-map'

module.exports = config;
