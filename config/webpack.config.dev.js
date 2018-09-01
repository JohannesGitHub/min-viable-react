const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'none',
    hot: true,
    contentBase: path.resolve(__dirname, 'app')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        options: {
          configFile: path.resolve(__dirname, '.eslintrc'),
          failOnWarning: true,
          failOnError: true
        },
        exclude: /node_modules/
      }
    ]
  }
})
