WEBPACK 构建基本流程
> 本次构建项目 webpack 版本为 4.29.6

# 创建项目
```bash
    mkdir webpack-study && cd webpack-study && mkdir src src/css src/js src/images dist && touch index.html main.js
    # 以上是一次性创建这么多文件，看不懂的看下面
    # 1.项目文件
    mkdir webpack-study
    # 2.进入项目文件
    cd webpack-study
    # 3.创建文件夹
    mkdir src
    mkdir src/css
    mkdir src/js
    mkdir src/images
    mkdir dist
    touch index.html
    touch main.js
```

## 安装我们所需的工具

```bash
    npm i -g webpack webpack-cli -D
    npm init -y
```

> 继续，先把文件初始化,注意， index.html 中的 bundle.js 是不存在的，需要初始化项目后 通过打包来生成该文件，先不用管这个，按照这个内容来写入即可
+ index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- ...此处省略 -->
        <script src="../dist/bundle.js"></script>
        <title>Document</title>
    </head>
    <!-- ...此处省略 -->
    </html>
```

+ main.js
```js
    console.log('come in');
```


## 打包命令
``` bash
    webpack ./src/main.js -o ./dist/bundle.js --mode production
```

> 打开这个index文件 此时可以在网站中看到控制台输出的 come in 了

## webpack.config.js
```bash
    touch webpack.config.js
```

> 文件配置内容参照以下进行设置

```js
    // webpack.config.js
    // 这个配置文件其实就是一个 JS 文件， 通过 Node 中的模块操作，向外暴露了一个 配置对象
    const path = require('path'); //    引入 Node 中的一个对象，使用它来获取当前根路径
    module.exports = {
        // 入口文件 表示要使用 webpack 打包哪个文件
        entry: path.join(__dirname, './src/main.js'),
        // 输出文件 表示要将打包的文件输出到哪个位置
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'bundle.js'
        }
    }
```

## 关于使用 npm run 来打包
> 到了这一步我们就可以简化我们的打包流程，不需要每次都输入那么长的一串代码，简化方式以下几点
```js
    // package.json
    "scripts":{
        // ...
        + "dev": "webpack --mode development",
        + "build": "webpack --mode production"
    }
```

> 以上两条就是打包命令，其实就只有一条，只是不同点在于 --mode 顾名思义 `development` 就是*开发模式*  `production` 就是*生产模式*

```bash
    # 第一个打包命令
    webpack --mode production
    # 第二个打包命令 （需要一个前置设置，在 package.json 中的 scripts 中加入[关于使用 npm run 来打包]）
    npm run dev
    # or
    npm run build
```

# 关于 webpack 插件的使用及介绍
> 避免该篇文章内容过多，新建一个 1-webpack-dev-server.plugin.md 请在当前目录下找到 这个文件并进行查阅