const path = require("path");

module.exports = {
  // 模式
  mode: "development",

  // 入口
  entry: path.resolve(__dirname, "src/index.js"),

  // 输出
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  }

}