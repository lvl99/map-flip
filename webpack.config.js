const path = require("path");

module.exports = {
  name: "map-flip",
  mode: "production",
  entry: path.normalize(__dirname, "src/map-flip.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "map-flip.js"
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
