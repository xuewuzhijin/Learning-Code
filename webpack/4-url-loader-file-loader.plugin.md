PLUGIN url-loader / file-loader
常用的两个加载器，当在css中引入图片时，将会报错，无论是css、less、scss、stylus，都需要这种插件，除了图片以外，还可以处理css中引入字体报错

```bash
    npm install --save-dev url-loader file-loader
```

```js
    // webpack.config.js
    module.exports = {
        // entry: ' //... ',
        // output: { //... },
        // devServer: { //... },
        // plugins: [ //... ],
        module: [
            // css loader
            // { ... }
            // 字体的
            { test: /\.(ttf|svg|woff|eot|woff2)$/, use: 'url-loader'},
            // 图片的
            { test: /\.(jpg|jpeg|png|png|gif|bmp)$/, use: 'url-loader'},
            // or
            { test: /\.(jpg|jpeg|png|png|gif|bmp)$/, use: 'url-loader?limit=8196&name=[hash:8]-[name].[ext]'},
            // 参数介绍写下面
        ]
    }
```

## url-loader 参数
url-loader 的参数类似于 浏览器中打开的 url 参数，也就是常见的 queryString ，不过这个不重要，只是介绍参数可以这么写。
+ limit
> 如果不写这个，那么默认每张背景图自动转换为 base64 encoded URL ，而加上这个参数等同于限制图片`字节`超过这个就以真实 url 来代替，没超过的就转换成 base64 格式
+ name
> 如果不写这个，那么默认的图片名称以 哈希值 代替，至于为什么哈希值
> 当 A 与 B 文件中各有一张图片 名为 name.jpg, 前面提到所有的文件以及 JS 都会被挂载到 / 目录下，如果两张图片仅是同名并不同样，那么就会发生覆盖现象，具体以后写的图片路径优先
 + [hash:8]-
 > 表示以 8位 哈希值为前缀，注意 后面有一个 -
 + [name]
 > 表示用图片原本的名字
 + .[ext]
 > .扩展名，什么格式的图片就以 .什么格式结尾

 ## 官网文档中参数
 > 具体查看作者仓库地址
 [`url-loader`](https://github.com/webpack-contrib/url-loader)

 ```js
    rules: [
        {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              fallback: 'responsive-loader'
            }
          }
        ]
      }
    ]
 ```