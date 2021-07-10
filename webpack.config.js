const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//const Html

module.exports = (env) => {
  return {
    entry: {
      index: "./src/index.js",
      print: "./src/print.js",
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Output Management",
      }),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.woff$/i,
          type: "asset/resource",
        },
        {
          test: /\.png$/i,
          type: "asset/resource",
        },
      ],
    },
  };
}