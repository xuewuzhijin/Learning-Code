# JavaScript Regular Expression

## 目录

 * [正向预查](#正向预查)
 * [负向预查](#负向预查)
 * [正负预查相同点](#正负预查相同点)
 * [有趣的经典题](#有趣的经典题)

### 正向预查

> 正向预查也叫正向匹配：表示你必须满足这个条件

```JavaScript
/**
* Q: 我想要 git repositories 中的 git，不要 gitRepositories 中的 git
*
* 思路：
* 1. 它要 git
*   /git/
* 2. 它只要 git后面有空格和repositories的git
    /git(?=\srepositories)/
*/

var str = "git repositories",
    res = /git(?=\srepositories)/.exec(str);
// 必须满足 git 后面有一个空格并且紧跟着repositories

console.log(res);
// ["git", index: 0, input: "git repositories", groups: undefined]


/**
* Q: 我即想要  git repositories 中的 git，又想要 gitRepositories 中的 git
*
* 思路：
* 1. 它要 git
*   /git/
* 2. 它想要后面可能有空格可能是小写r或者大写r的git
*   /git(?=\s?[rR]epositories)/
*/

var str = "git repositories",
    reg = /git(?=\s?[rR]epositories)/;

console.log(reg.exec(str));
// ["git", index: 0, input: "git repositories", groups: undefined]

str = "gitRepositories";
console.log(reg.exec(str))
// ["git", index: 0, input: "gitRepositories", groups: undefined]


/**
* Q: 我只想要  git repositories 和 gitRepositories 中的 git，不想要 git Repositories 和 gitrepositories 中的 git
*
* 思路：
* 1. 它要 git
*   /git/
* 2. 它想要后面可能有空格可能是小写r或者大写R的git
*   /git(?=\srepositories|Repositories)/
*   /git(?=\sr|Repositories)/ 也可以这样，但不够严谨，比如，会匹配 git r[任意字符]
*/

var str = "git repositories",
    reg = /git(?=\srepositories|Repositories)/;

console.log(reg.exec(str))
// ["git", index: 0, input: "git repositories", groups: undefined]

str = "gitRepositories";
console.log(reg.exec(str))
// ["git", index: 0, input: "gitRepositories", groups: undefined]

str = "git Repositories";
console.log(reg.exec(str))
// null
str = "gitrepositories";
console.log(reg.exec(str))
// null
```

### 负向预查

> 负向预查也叫负向匹配：表示你不能满足这个条件

```JavaScript
/*
* Q: 我只想要 git 后面除了 repositories 这个单词以外，其它所有单词都可以的 git
*
* 思路：
* 1. 它还是想要 git
*   /git/
* 2. 它只想要 git 后面不是 repositories 单词的 git
*/
var str = "git repositories",
    reg = /git(?!repositories)/;
console.log(reg.exec(str))
// git

str = "gitrepositories"
console.log(reg.exec(str))
// null

str = "github"
console.log(reg.exec(str))
// git

/*
* Q: 还是不能跟着 repositories ，首字母无论大小写或者有无空格都不要
*/

var str = "git repositories",
    reg = /git(?!\s?[Rr]epositories)/;
console.log(reg.exec(str))
// null

str = "gitrepositories"
console.log(reg.exec(str))
// null

str = "git Repositories"
console.log(reg.exec(str))
// null

str = "gitRepositories"
console.log(reg.exec(str))
// null

// ...就写这么多了，写的有点索然无味
```


### 正负预查相同点

> 他们的相同点就是非捕获，非捕获的意思很好理解，也就是这两种组合后面的表达式 (?=) (?!) 只匹配不捕获，上面两个 case 只会输出两种值，第一个是 `git`， 第二个是 `null`，要么匹配成功，要么匹配失败


### 有趣的经典题

比较有趣的是，可以让正则来提示用户设置一个复杂的密码

```JavaScript
/*
* 题目1： 不能全是字母，不能全是数字，不能全是小写，不能全是大写，长度5-10位
*
* 思路：
* 1. 密码 5-10 位     /^\w{5,10}$/
* 2. 不能全是字母，不能全是数字，不能全是小写，不能全是大写
* 前面说了，负向预查就是 你不能满足这个条件
* 2.1 不能全是字母 (?![a-zA-Z]+$)
* 2.2 不能全是数字 (?![0-9]+$)
* 2.3 不能全是小写 (?![a-z]+$)
* 2.4 不能全是大写 (?![A-Z]+$)
*/
let reg = /(?!^[a-zA-Z]+$)(?!^[0-9]+$)(?!^[a-z]+$)(?!^[A-Z]+$)^\w{5,10}$/;

console.log(reg.exec("abcDEF"));    // 不能全是字母
// null
console.log(reg.exec("abcdefg"));   // 不能全是小写
// null
console.log(reg.exec("ABCDEFG"));   // 不能全是大写
// null
console.log(reg.exec("123456"));    // 不能全是数字
// null
console.log(reg.exec("abcDEF123"));
// ["abcDEF123", index: 0, input: "abcDEF123", groups: undefined]

/*
* 怎么理解？
* 我要求你的密码必须是5~10位，但你前提是 不能全是字母，不能...
* 行，我把这条件全部 blabla 放到前面，你前面成立了，后面就不执行了
*/

// 正则还能不能优化了？
let optimization = /^(?![a-zA-Z]+$)(?!\d+$)(?![a-z]+$)(?![A-Z]+$)\w{5,10}$/;
// 能优化 ^ 也能优化 0-9，但不能优化 +$，因为每一个条件必须从头至尾匹配



/*
* 题目2： 要求包含小写、大写、数字、特殊字符，长度5-10位
*
* 思路：
* 1. 密码 5-10 位     /^.{5,10}$/  这里 \w 不适用，因为包含特殊字符，而 \w 只包含下划线 _ ，所以如果出现其它字符就会匹配不到结果
* 2 要求包含小写    (?=.*?[a-z])
* 3 要求包含大写    (?=.*?[A-Z])
* 4 要求包含数字    (?=.*?\d)
* 5 要求包含特殊字符    (?=.*?[-#@*&.~!$%=^&_+！￥……（）,，。\/\\(){}[\]])
*/

/*
* 怎么理解包含？
* 假设输入了一串字符 "-abcDEF123"
* 1. 要求包含小写 (?=[a-z]) 如果这么写，表示这串字符前面必须是字母开头，所以如果不确定用户用什么来开头，那么使用任意字符再接上贪婪模式，但也许还真是个字母开头，所以加个问号，尽可能的减少贪婪匹配，那么大写与数字、字符的同理。
* 2. 简单粗暴接地气的说，想匹配小写字母前面是否有其它字符然后再在这对字符里匹配是否包含了字母
*/

var password = "-abcDEF123",
    reg      = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[-#@*&.~!$%=^&_+！￥……（）,，。\/\\(){}[\]]).{5,10}$/

console.log(res.exec(password));
// ["-abcDEF123", index: 0, input: "-abcDEF123", groups: undefined]

password = "abcDEF123";
console.log(res.exec(password));
// null
```