const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const sharedConfig = require("./webpack.shared.config.js");

let config = {
  //let webpack know that it's server-side code, not web
  target: "node",
  //entry point for server code
  entry: "./server/index.js",
  output: {
    //tells webpack to save the transpiled code to ./build/server/bundle.js
    path: path.join(__dirname, "./build/server"),
    filename: "bundle.js"
  },
  //don't include modules from node modules in server code bundle
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        //make sure html classnames match what's being used in css served on the client side
        test: /\.less$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                exportOnlyLocals: true,
                exportLocalsConvention: "camelCase",
                localIdentName: "[local]_[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(sharedConfig, config);
