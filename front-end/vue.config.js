const path = require("path");

module.exports = {
  outputDir: path.join(__dirname, "../docs"),
  publicPath: "/",
  transpileDependencies: ["vuetify"]
};
