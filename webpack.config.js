const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  name: "map-flip",
  mode: "development",
  entry: {
    "map-flip": path.normalize(__dirname, "src/index.js"),
    "map-flip.min": path.normalize(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "mapFlip",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\./
      })
    ]
  }
};
