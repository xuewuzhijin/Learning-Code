PLUGIN html-webpack-plugin 介绍

# 自动添加编译文件的路径
> 意指 index.html 不需要去添加编译文件的路径，这个插件会自动把编译后的文件路径添加到页面中

```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- ...此处省略 -->
        <!-- <script src="./dist/bundle.js"></script> -->
        <title>Document</title>
    </head>
    <!-- ...此处省略 -->
    </html>
```

```js
    // webpack.config.js
    const path = require('path');
    const htmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        // entry: '...',
        // output: { //... },
        // devServer: { //... },
        plugins: [
            // ...
            // 创建一个在内存中生成 HTML 页面的插件
            new htmlWebpackPlugin({
                // 指定模板页面——会根据指定的页面路径去生成内存中的页面
                template: path.join(__dirname, './src/index.html'),
                // 指定生成页面的名称
                filename: 'index.html'
            })
        ]
    }
```
    那么安装之后直接执行就行了
```bash
    npm i html-webpack-plugin -D
    npm run dev
```

# 关于 3-css/style/less/sass/styl.plugin.md 插件的使用及介绍
> 避免该篇文章内容过多，新建一个 3-css-style-less-sass-styl.plugin.md 请在当前目录下找到这个文件并进行查阅