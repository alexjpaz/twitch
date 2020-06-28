var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
  entry: {
    "common": path.resolve(__dirname, './src/common.js'),
    "overlay": path.resolve(__dirname, './src/overlay.js'),
  },
  module: {
    rules: [
      {
        test: /\.(png)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "overlay",
      chunks: ['common','overlay'],
    })
  ]
};
