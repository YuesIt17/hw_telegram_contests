const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolvePath = p => path.resolve(__dirname, p)

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
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
      '@utils': resolvePath('./src/utils'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
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
