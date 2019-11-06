import path from "path";
import webpack from "webpack";
import htmlWebpack from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.ts",
  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        loader: "style-loader!css-loader!stylus-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ ".ts", ".js", ".json", "*" ],
    alias: {
      "@js": "./JavaScript",
      "@css": "./css"
    }
  },

  externals: {
    d3: "d3"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin(),
    new htmlWebpack({
      filename: "index.html",
      template: "index.html"
    })
  ],

  stats: {
    warningsFilter: /Entrypoint/,
    children: false
  }
};

module.exports = config;
