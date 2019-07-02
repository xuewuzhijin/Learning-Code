# Typescript 使用流程

* [安装](#Typescript安装)
* [初始化](#Typescript初始化)
* [编译](#Typescript编译)
* [自动化编译](#自动化编译)
 + [命令监视](#命令监视)

## Typescript安装

```bash
npm install -g typescript
```

## Typescript初始化

```bash
# 首先创建一个项目目录
# tsc 属于 Typescript 的脚本命令，只有在 Typescript 安装成功且全局安装有效
mkdir TypeScript
cd TypeScript
tsc --init
```

## Typescript编译

```bash
# 创建一个以 ts 结尾的文件并随便写点 JS 内容
touch typescript.ts
# or
cd.>typescript.ts
```

```TypeScript
// typescript.ts
let num:number = 10;
```

```bash
tsc typescript.ts
```

## 自动化编译

    打开初始化的 `tsconfig.json` 文件，并开启将 ts 文件编译成 js 文件后的目录，如下所示

```json
    // tsconfig.json
    // ...
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./js",                        /* Redirect output structure to the directory. */
    // ...
```

    如果是 VSCode 编辑器，那么点击左上角的 `终端` -> `运行任务` -> `tsc:监视 - Typescript\tsconfig.json`,其它编辑器就不说了

### 命令监视

```bash

# 首先 cd 到当前项目根目录
# tsc -p ./tsconfig.json --watch
```