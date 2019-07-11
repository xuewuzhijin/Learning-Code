const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.(cs|stylu?)s$/,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    { 
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            moduleFilename: ({name}) => `${name.replace('/js/', '/css/')}.css`
        }),
        new htmlWebpackPlugin({
            title: '02-vue-loader-advanced',
            template: path.join(__dirname, '02-vue-loader-advanced-template.html'),
            filename: 'index-output.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}