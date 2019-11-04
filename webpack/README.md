# 从零开始构建 WEBPACK

工具名称 | 版本
-|-
npm | 6.12.0
webpack | 4.41.2
webpack-cli | 3.3.10
webpack-dev-server | 3.8.1

## 目录

 * [初始化项目](#初始化项目)

## 初始化项目

> webpack 工具依赖于 `NodeJs` 所以在初始化项目前，需要保证你的电脑已经正确安装了它，这里不赘述 NodeJs。

1. webpack  用来调度 webpack-cli 下的一些方法
2. webpack-cli  用来处理各种文件，将其它 loader 完成好的 js 来打包到一起
3. package.json 项目的核心文件，该文件将记录当前项目所使用到的项目依赖(开发中的依赖与生产中的依赖)，同时在命令行中的脚本命令也在该文件中编写

webpack 与 webpack-cli 两者相互依赖，也是构建一个项目的核心

在电脑的任意位置创建一个空的文件夹作为你的项目文件夹，接着使用命令行工具 cd 到该项目文件夹中。

```bash
# 这条语句会生成一个 package.json 文件。
# 顺序不能乱，因为最后面的语句会在这个文件中的开发依赖中记录 webpack 与 webpack-cli 当前版本
$ npm init -y
# 这条命令的意思是 安装一个全局的 webpack 以及 webpack-cli 并保存到当前项目的 node_modules 下。如果你已经全局安装过了，那么可以省去 -g
$ npm i -g webpack webpack-cli -D
```

此时你项目下的文件应该是 `node_modules` `package.json` `package-lock.json` *最后一个可能没有*

**创建一个 webpack 配置文件**

如果说 `package.json` 是用来记录你所使用的插件信息与脚本信息的话，那么 webpack 配置文件就是告诉 webpack 如何去运行去处理你自己的项目

创建一个 `webpack.config.js` 文件

```JavaScript
// webpack.config.js
module.exports = {
    mode: "development",        // 可选项有 "production" | "development"
    // 两者的区别在于生产中(production)，它会压缩 js，反之不会压缩
    // 除此之外，很多 插件(plugins)也会根据当前环境执行不同的命令，这样可以减少很多插件的工作，提高 webpack 的编译速度，这点很重要，当你的项目越大，差距越明显，比如原本要1分钟的编译时间，可以减少到30秒甚至20秒



    // entry: "./index.js"
    entry: "/"                  // 如果你的入口文件是 index.js 并且也在项目根目录，那么等同于上面的 entry 写法。
    // 可如果不写 entry 那么 webpack 默认会去找当前项目下的 src 文件下的 index.js 文件
}
```

所以，你现在还没有创建一个 index.js 文件，动手创建一个 `Hello World`

```JavaScript
// index.js
console.log("Hello World");
// 注意，这个 index.js 文件的位置要对应 webpack.config.js 中的 entry 位置。
// 除了位置要正确，名字也要正确
```

创建完成后，给 `index.js` 打包

```bash
# cd 项目根目录
$ webpack
```

<details>

<summary>如果执行 webpack 出现问题，点击这里</summary>

**command not found**

```bash
$ webpack
bash: webpack: command not found

# 执行下面命令
$ npm link webpack

# 它会返回一串类似下面的字符串给你
C:\Users\ADMIN\AppData\Roaming\npm\webpack -> C:\Users\ADMIN\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js

# 接着再打包
$ webpack
```

**Do you want to install 'webpack-cli'**

```bash
$ webpack
One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no):

# 请输入 no 然后执行下面命令
$ npm link webpack-cli

# 它会返回一串类似下面的字符串给你
C:\Users\ADMIN\AppData\Roaming\npm\webpack-cli -> C:\Users\ADMIN\AppData\Roaming\npm\node_modules\webpack-cli\bin\cli.js

# 接着再打包
$ webpack
```
</details>
 
---

Awesome! 你已经完成了 webpack 项目构建了