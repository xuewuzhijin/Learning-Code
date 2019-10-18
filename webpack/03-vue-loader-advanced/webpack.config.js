const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader!eslint-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: '/\.(c|postc)ss$/',
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          miniCss.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [ 'sass-loader' ]
      },
      {
        test: /\.less$/,
        use: 'less-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new miniCss({
      moduleFilename: ({ name}) => `${name.replace('/js/', '/css/')}.css`
    }),
    new htmlWebpackPlugin({
      title: '03-vue-loader-advanced',
      template: path.join(__dirname, '03-vue-loader-advanced-template.html'),
      filename: 'index-output.html',
      minify: {
          collapseWhitespace: true,
          removeComments: true
      }
    })
  ]
}