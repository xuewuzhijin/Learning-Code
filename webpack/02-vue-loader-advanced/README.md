# 流程细节

1. 把打包出来的 JS 通过插件来插入到 指定的HTML中
2. 使用 styl 样式，用 styl-loader 来处理成 css 并把css单独分离出来打包成一个文件

```Js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 抽离通过 vue-loader 处理出来的 css 

const htmlWebpackPlugin = require('html-webpack-plugin')
// 通过输出的 js 、css 文件自动注入到模板文件中

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
            // 这里处理通过 vue-style-loader 出来的 css 数据
            {
                test: /\.(cs|stylu)s$/,             // stylus 作为默认解析加载器，即指，vue文件中 无论lang = "css/stylus" 都会被 stylus-loader 处理
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,    //  把 vue-style-loader 处理的 css 数据 抽离出来单独形成一个文件
                    { 
                        loader: 'css-loader',       //  再用 css-loader 来处理一下
                        options: {
                            importLoaders: 1        //  表示 css-loader 处理后，还需要一个 loader 来处理一下
                        }
                    },
                    'stylus-loader'                 //  这就是上面所说的 loader
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),

        // 抽离出来的数据执行下面函数
        new MiniCssExtractPlugin({
            moduleFilename: ({name}) => `${name.replace('/js/', '/css/')}.css`
            // 把 vue-style-loader 处理的文件名 替换成 输出后的 css 文件名
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
```