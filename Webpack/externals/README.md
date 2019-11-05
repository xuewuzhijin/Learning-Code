# Webpack Externals

`不要遵循/打包这些模块，而是在运行时从环境中请求他们`

当项目中不需要打包某个插件仅仅只是从外部引用它们时，例如使用CDN来引入它们，或者是一个项目的配置文件，举一个很简单的例子，jQuery、Vue、React...

```JavaScript
module.exports = {
    mode: "production",

    // key 属于模块，也就是指 import xxx from "jQuery", 这个 from 的 jQuery
    // 值属于在外部引用的(如：CDN加载暴露在全局（window）的 jQuery)
    externals: {
        // jQuery: "jQuery",
        jQuery: "$"
    }

    // 当你打包后，它会在你引入jQuery的地方自动把jQuery替换成 window.jQuery 或者 window.$
}
```

**不打包指定的模块**


```JavaScript
// 目录结构

├── src
│   ├── utils
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json

// 自定义的模块 /src/utils/index.js
window.custome = "hello";
```

你在某某文件中引用了自定义的模块

```JavaScript
// webpack 会自动引用该路径下的 index.js
import xx from "@utils"
```

webpack.config.js

```JavaScript
const path = require("path");

module.exports = {
    mode: "production",

    // 通过指定目录设置别名告之 webpack 这是一个模块
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@utils": path.resolve(__dirname, "src/utils"),
        }
    }

    externals: {
        // 此时可以这样
        "@src/utils/index.js": "custome",
        // 也可以这样
        "@utils": "custome"
    }
}
```