module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      //preprocess .js files with babel-loader
      //transpile ES6+ and JSX to js code that browsers and node can understand
      //options specified in babel.config.js
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    //don't have to type '.js' or '.less' when importing files
    extensions: [".js", ".less"]
  }
};
