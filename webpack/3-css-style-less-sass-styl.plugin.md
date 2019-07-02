PLUGIN css / style / less / sass / styl
css 样式处理器，若想在 JS 中直接引用 css、less、sass、styl 文件，则需要第三方加载器

```bash
    # cd 并创建文件
    cd src/css && touch css.css less.less scss.scss styl.styl
    # main.js 中
    # import './css/css.css';
    # import './css/less.css';
    # import './css/styl.css';
    # import './css/scss.css';

    # css
    npm install --save-dev css-loader style-loader
    # less
    npm install --save-dev less-loader less
    # stylus
    npm install --save-dev stylus-loader stylus
    # sass
    npm install sass-loader node-sass webpack --save-dev
```

# webpack 第三方工具处理文件类型过程
1. 处理的文件是否是 JS 文件，如果不是则去 webpack.config.js 配置文件中找第三方 loader 规则
2. 如果能找到对应的规则，就调用对应的 loader 来处理这种类型的文件
3. 调用 loader 的时候，是从后往前调用的，例如：
```js
    rules: [
        {
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            // 先调用 css-loader 再调用 style-loader
        }
    ]
```
4. 当最后一个 loader 调用完毕，会把处理的结果交给 webpack 进行打包合并，最终输出到 bundle.js 中

```js
    module.exports = {
        // entry: ...,
        // output: { //... },
        // devServer: { //... },
        // plugins: [ //... ],
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
                        loader: "style-loader" //   将 JS 字符串生成为 style 节点
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: "sass-loader" //    将 Sass 编译成 CSS
                    }]
                }
            ]
            // 以上写法都可以，无论哪种方式，具体查看官网介绍，但需要注意一点，任意一种并且写入对应规则之后需要重新编译 `npm run dev`
        }
```
*注意*
如果使用了第三方处理器的 loader 那么对元素背景采用图片地址的话需要其它的 loader 来处理， 常见的就是css中的 background-image，详细看下篇

# 关于 4-url-loader-file-loader.plugin.md 插件的使用及介绍
> 避免该篇文章内容过多，新建一个 4-url-loader-file-loader.plugin.md 请在当前目录下找到这个文件并进行查阅