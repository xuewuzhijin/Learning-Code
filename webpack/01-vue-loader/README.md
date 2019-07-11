# 流程细节

```Js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, './'),
        filename: '[name]d.js'
    },
    module: {
        rules: [
            // 处理 .vue 结尾的文件
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            // 处理通过 vue-style-loader 出来的 css 文件
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
        // 使用 vue-loader 必须要的插件
        // https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
        new VueLoaderPlugin()
    ]
}
```

```json
  // webpack.config.js
  "devDependencies": {
    "css-loader": "^3.0.0",
    "vue": "^2.6.10",
    "vue-loader": "^15.7.0",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5"
  }
  // 准确的说，顺序是这样
  "devDependencies": {
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5",
    "vue": "^2.6.10",
    "vue-loader": "^15.7.0",
    "vue-template-compiler": "^2.6.10",
    "css-loader": "^3.0.0",
  }
```

  1. webpack 用来调度 webpack-cli 下的一些方法
  2. webpack-cli 用来处理各种文件，将其它 loader 完成好的 js 来打包到一起
  3. webpack-cli 不认识 vue 文件，所以如果要想把vue文件处理就需要一个 vue-loader 来处理
  4. vue-loader 用来处理vue文件，将script、css（前提是 style lang="css" 不写就是默认的）以及template分离返回出去
  5. 但webpack不认识template，所以需要通过 vue-template-compiler 把template 转换成 script 渲染函数
  6. css 也不认识，所以遇到 css 就需要 css-loader 来处理，单独打包成一个 css 模块，当加载了这个vue组件时同时就加载了这个 css 模块

  > 如果 `style lang="scss/less/styl"` 那么需要单独安装 scss/less/styl-loader 来处理他们

  这样处理有一个问题，第一， css 不好压缩，而且当css注入DOM中，会有一个闪烁的状态，并且增加一些JS的运行开销，最好是单独打包成一个css文件，然后压缩，这样就可以解决上面所遇到的问题。
