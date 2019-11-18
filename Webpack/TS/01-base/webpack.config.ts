import path from "path";
import webpack, { Configuration } from "webpack";

export default {
  mode: "development",

  entry: path.resolve(__dirname, "src/index.ts"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }

} as Configuration