import path from "path";
import webpack from "webpack";
import htmlWebpack from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.ts",
  devtool: "source-map",
  context: __dirname,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },

  resolve: {
    extensions: [ ".ts", ".js", ".json", "*" ],
    alias: {
      "@Js": "./JavaScript/",
      "@Css": "./css/",
      "@": "./"
    }
  },

  externals: {
    d3: "d3"
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin(),
    new htmlWebpack({
      filename: "index.html",
      template: "index.html"
    })
  ],

  cache: true,

  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/
  },

  stats: {
    warningsFilter: /Entrypoint/,
    children: false
  }
};

module.exports = config;
