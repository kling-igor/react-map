const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    __dirname + '/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'index.js'
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: __dirname + '/index.html',
        inject: "body",
        hash:true
    })
  ]
};