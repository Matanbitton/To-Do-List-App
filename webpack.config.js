const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const confetti = require("canvas-confetti");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.join(__dirname, "./dist/index.html"),
      inject: false,
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
