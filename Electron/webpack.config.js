const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '02-vue-loader/src/main.js'),
    output: {
        path: path.join(__dirname, './'),
        filename: '[name]d.js'
    },

    // webpack-dev-server
    devServer: {
        open:   true,   //  启动后打开浏览器
        port:   8080,   //  启动后使用的端口
        hot:    true,   //  更新文件后更新
        contentBase:    '02-vue-loader/src'   //  启动后默认打开的文件路径
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}