const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sharedConfig = require("./webpack.shared.config");

const clientPort = 8080;

const config = {
  target: "web",
  //entry point for client side code
  entry: "./client/index.js",
  output: {
    //allow webpack to save transpiled client-side js bundle output as ./build/client/scripts/bundle.js
    path: path.join(__dirname, "./build/client"),
    filename: "scripts/bundle.js",
    //where we'll be serving the client side bundle
    publicPath: `http://localhost:${clientPort}/`
  },
  devServer: {
    port: clientPort,
    liveReload: true
  },
  module: {
    rules: [
      {
        //transpile .less files to CSS that the browser understands
        //allows import style from ./style.less scoped locally to the component importing it
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[local]_[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    //generate a new CSS bundle separate from the js bundle
    //plugin tells webpack to serve CSS bundle from http://localhost:8080/styles/bundle.css
    new MiniCssExtractPlugin({
      filename: "styles/bundle.css"
    })
  ]
};

//merged shared config with the config we specify here for the client
module.exports = merge(sharedConfig, config);
