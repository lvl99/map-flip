const path = require("path");

module.exports = {
  name: "map-flip",
  mode: "production",
  entry: path.normalize(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "es5"),
    filename: "index.js"
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
  }
};
