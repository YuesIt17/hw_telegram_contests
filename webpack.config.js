const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const resolvePath = p => path.resolve(__dirname, p);

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: resolvePath("dist"),
    publicPath: isProduction ? "/hw_telegram_contests/" : "/"
  },
  devServer: {
    open: true,
    host: "localhost",
    //https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      utils: path.resolve(__dirname, "src/utils"),
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new LodashModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: ['lodash'],
        }
      },
      {
        test: /\.(c|s)a?ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.s([aс])ss$/,
      },
      {
        test: /\.(c|s)a?ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
        include: /\.module\.(c|s)a?ss$/,
      },
    ],
  },
};

module.exports = config;
