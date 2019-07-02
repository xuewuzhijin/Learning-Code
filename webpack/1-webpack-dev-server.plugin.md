PLUGIN `webpack-dev-server` 介绍
依旧根据上一篇文章来进行
* webpack-dev-server [自动打包编译](##自动打包编译)

## 自动打包编译
> 通过这个工具，可以不用写一点代码就打包一次，让这个工具来监听你的文件，当文件内容 `被改变` 自动进行打包编译

```bash
    npm i webpack-dev-server -D
```

    更改 package.json 文件
```js
    "scripts": {
        // ...把之前的修改为后面带 + 号的
        - "dev": "webpack --mode development",
        + "dev": "webpack-dev-server --mode development"
    }
```

    使用命令
```bash
    npm run dev
    # 执行后 此时控制台将输出
    ℹ ｢wds｣: Project is running at http://localhost:8080/
    ℹ ｢wds｣: webpack output is served from /
    ℹ ｢wdm｣: Hash: b5ca9334902298ac21b4
    Version: webpack 4.29.6
    Time: 446ms
    Built at: 2019/04/12 下午10:26:54
        Asset     Size  Chunks             Chunk Names
    bundle.js  658 KiB    main  [emitted]  main
    Entrypoint main = bundle.js
    # ...
    # 看第一行，执行命令后该工具会给你一个路径让你打开该项目的地址 http://localhost:8080/ 也就是这个
    # 1. 如果你的地址不一样 有可能是该8080端口被占用 但不用担心 给你的是哪个就用哪个
```

## 更新 main.js 刷新页面不起作用
> 此时你更改 main.js 中的内容，刷新页面无丝毫变化，甚至是用电脑文件路径打开的也没变化

看上面控制台输出的第二行，*ℹ ｢wds｣: webpack output is served from /* 表示通过 webpack 输出的服务路径是跟路径，即`/`。

此时我们把 index.html 中的 `../dist/bundle.js` 更改为 `/bundle.js` ， 更改完成后你可以看到页面有了变化，但你肯定找不到这个 bundle.js 的位置在哪里。

> 细心的人会看到当你更改内容后，不需要刷新页面，页面就自动更新了，实际上这个输出的文件不存在磁盘的物理路径上，而是在内存中，因为文件频繁的更新无论是写入还是输出比起物理硬盘要快非常多，所以看不到是正常的。

## 关于 参数配置

```js
    // package.json
    "scripts": {
        "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot --mode development"
    }
```
+ --open
执行就自动在浏览器打开该路径
+ --port
把默认 `8080` 端口更改为 `3000` 端口
+ --contentBase
打开后默认进入 `src` 路劲
+ --hot
以热更新的方式编译文件，意思就是不用这个的话，文件每次都会完全编译，如果项目内容很大的话，这样更新会比较慢，而使用热更新的方式去更新，类似于给你上一个编译后的文件打补丁，可以试着查看下面的

> bundle.js    687 KiB    main  [emitted]  main

*若是没有使用 --hot 终端是不会显示下面这个文件信息的，而使用之后，相当于每次更新上面的文件内容后，上面的文件不会重新编译，仅通过下面的文件给上面的文件来 "打补丁"*
> main.6d8bcbaf3da69226a4f8.hot-update.js  987 bytes    main  [emitted]  main

## 配置参数的另一种形式
> 如果觉得配置那么一长串看起来不爽的话，那么可以看看这种，虽然有点麻烦
```js
    // package.js
    "scripts": {
        // ...
        "dev": "webpack-dev-server"
    }
```
```js
    // webpack.config.js
    //  启用热更新的 第二步
    const webpack = require('webpack');
    module.exports = {
        // entry: ...,
        // output: { //... },
        // 配置 webpack-dev-server 命令参数的第二种形式
        devServer: {
            open: true, //  自动打开浏览器
            port: 3000, //  配置端口
            contentBase: 'src', //  默认打开的文件路径
            hot: true,  //  启用热更新的 第一步
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin() // new 一个热更新的模块对象，这是启用热更新的 第三步
        ]
    }
```

# 关于 html-webpack-plugin 插件的使用及介绍
> 避免该篇文章内容过多，新建一个 2-html-webpack-plugin.plugin.md 请在当前目录下找到这个文件并进行查阅