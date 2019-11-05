# Webpack 插件

`webpack` 插件的使用其实很好理解，根据官网给定的 [配置](#https://www.webpackjs.com/configuration/) 结构，从结构上就很容易理解并进行拆分，例如：

```JavaScript
module.exports = {
  mode: "development",
  // ...
  plugins: [

    // 通过这里可以看到，它是一个数组类型，在执行 webpack 时，这里的插件都会执行

    // 需要注意，这里的值只能是一个正确的插件，不能为空/undefined/null/[]/{}，否则编译将不会成功

  ]
  // ...
}
```

## Example

这里使用一款常见的插件进行演示 [html-webpack-plugin](#https://github.com/jantimon/html-webpack-plugin) 

```bash
# 1.首先构建项目目录
mkdir myProject && cd myProject

# 2.创建一个项目清单
npm init -y

# 3.下载 webpack 环境以及 这款插件
npm i webpack webpack-cli html-webpack-plugin --save-dev

# 4.创建一个以下几个文件
touch webpack.config.js index.js index.html
```

然后给我们创建的几个文件写上点什么

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TITLE</title>
</head>
<body>
  <div id="app">Hello World</div>
</body>
</html>
```

index.js

```JavaScript
~function(word){
  console.log(word);
}("Hello World");
```

webpack.config.js

```JavaScript
const path       = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "index.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  plugins: [
    new HtmlPlugin({
      // 打包后输出的文件名叫什么
      filename: "index.html",
      // 你的模板文件在哪里
      template: "index.html"
    })
  ]
}
```

插件的使用就这么简单，最后一步，打开命令行工具，`cd` 到这个项目 并执行 webpack

```bash
webpack
```
