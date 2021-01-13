module.exports = function (api) {
  api.cache(true);
  return {
    //transpile ES6+ code into js code understood by Node and web browsers
    //transpile JSX into js code
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: []
  };
};
