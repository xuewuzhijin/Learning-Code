# 使用包管理器来开发项目

常见的包管理器有以下几种

1. npm -> `NodeJs` 自带的包管理器
2. cnpm -> 淘宝(没错，就是阿里)包管理器
3. pnpm -> 由 `Zoltan Kochan` 个人开发一款开源包管理器
4. yarn -> `Facebook`、`Google`、`Exponent` 和 `Tilde` 联合推出的包管理器

一个项目有且仅有一个包管理器，如果出现多个会导致`node_modules` 内的包出现混乱或者项目运行出错(这种错误有点无厘头，代码明明没错，但要么提示编译错误，要么提示项目哪哪哪代码有问题，偏偏去debug的时候，代码又没错，此时你试着删除 `node_modules` 再重新安装包，问题就这么解决了)。

例子中使用的是 `npm` 但在国内通过该安装包下载的包速度过于缓慢，所以不得不去使用其它包管理器来提高下载速度

## NPM镜像

前往它们的官网查看如何去安装并使用它们

[CNPM官网](#http://npm.taobao.org/)

[PNPM官网](#https://pnpm.js.org/)

[YARN官网](#https://www.yarnpkg.com/lang/en/)