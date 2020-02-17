const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath: path.resolve("../"),
  transpileDependencies: ["vuetify"]
};
