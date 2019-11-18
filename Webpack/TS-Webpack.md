# 从零开始构建 TS-WEBPACK

工具名称 | 版本
-|-
npm | 6.12.0
@types/node | ^12.12.8
@types/webpack | ^4.41.0
ts-node | ^8.5.2
typescript | ^3.7.2
webpack | 4.41.2
webpack-cli | 3.3.10
webpack-dev-server | 3.9.0

很多时候，当你在编写 webpack 配置文件时，可能会遇到忘记 webpack 内的各种属性以及属性值的类型，而现在如果你使用 ts 去编写 webpack 时，typescript 会结合编辑器给与你 API 的提示，并告诉你值的正确类型，如果你写错了某个地方，JS 不会告诉你那里错了，但 ts 则不同。

那么 ts 是一种趋势，它能够减少很多你不应该出现的错误，并且在第二次开发上，你能够一目了然的看到你的整个项目结构，减少在维护上的困难，特别是当这个库在不止一人维护的情况下。

## 目录

 * [初始化项目](#初始化项目)
 * [书写方式](#书写方式)
 * [开发及生产](#开发及生产)

## 初始化项目

```Bash
# 使用 ts 所需的一些插件
npm install typescript ts-node @types/node @types/webpack -D

# webpack 所需
npm install webpack webpack-cli webpack-dev-server -D

# loader
npm install ts-loader -D

# 初始化 tsconfig.json 文件
tsc --init

# 创建一个 webpack.config.ts 文件 [Linux / Mac / GitBash]
touch webpack.config.ts
# or [windows CMD]
cd. > webpack.config.ts
```

1. typescript 编译输出你的 ts 文件代码
2. ts-node 直接运行你的 ts 代码。而不用 tsc xxx.ts 输出 xxx.js， node xxx.js，相当于为你省去了这些步骤
3. @types/node node语法的一些类型提示
4. @types/webpack webpack语法的一些类型提示
5. ts-loader 是用来处理你后面所写的一些 .ts[x]? 文件


## 书写方式

```TypeScript
// webpack.config.ts
import path from "path";
import webpack, { Configuration } from "webpack";

export default {
  mode: "development",
  // ...此处省略 n - 10 行

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
} as Configuration;
```

如果熟悉 typescript 那么看到这里应该能秒懂了，该有的提示全都有，没有提示，没提示先检查语法，后检查编辑器，最后就是库的版本问题了。

## 开发及生产

```Bash
webpack --mode production
# or
webpack --mode development

# 如果运行时有报错问题，请在前方添加 npx 试试
```