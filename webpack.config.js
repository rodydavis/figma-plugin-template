const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  devtool: argv.mode === "production" ? false : "inline-source-map",
  entry: {
    ui: "./src/ui.ts",
    code: "./src/code.ts"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", { loader: "css-loader" }] },
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: "url-loader" },
      { test: /\.ttf$/, use: ["file-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [ 'node_modules']
  },
  output: {
    filename: "[name].js",
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "ui.html"),
      filename: "ui.html",
      inject: true,
      inlineSource: ".(js|css)$",
      chunks: ["ui"],
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
});
