// 这个配置文件，其实就是一个 JS 文件， 通过 Node 中的模块操作，向外暴露了一个 配置对象
const path = require('path')

// 启用热更新的第二步
const webpack = require('webpack')

// 导入在内存中生成的 HTML 页面的插件。`关于插件的问题： 只要是插件，全部放到 plugins 中`
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件 表示要使用 webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件 表示要将打包的文件输出到哪个位置
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 配置 webpack-dev-server 命令参数的第二种形式
    devServer: {
        open: true, //  自动打开浏览器
        port: 3000, //  配置端口
        contentBase: 'src', //  默认打开的文件路径
        hot: true,  //  启用热更新的第一步
    },
    plugins: [
        // new 一个热更新的模块对象，这是启用热更新的第三步
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个在内存中生成 HTML 页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面——会根据指定的页面路径去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成页面的名称
            filename: 'index.html'
        })
    ],
    // module 用于配置所有第三方模块的加载器
    module: {
        // 所有第三方模块的匹配规则
        rules: [
            // 配置处理以 .css 结尾文件的第三方 loader 规则
            {   test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {   test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {   test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {   test: /\.scss$/, use: [
                {
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {   test: /\.(jpg|jpeg|bmp|gif|png)$/, use: 'url-loader?limit=8192&name=[hash:8]-[name].[ext]' }
        ]
    }
}