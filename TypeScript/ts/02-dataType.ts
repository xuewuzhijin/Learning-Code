/* 布尔类型 */
var flag:Boolean = true;

/* 数字类型 */
var num:Number = 10;

/* 字符类型 */
var str:String = 'string';

/* 数组类型 */

// 第一种
var arr1:Number[] = [1, 11, 111, 1111];
var arr2:String[] = ['1', '11', '111', '1111'];
var arr3:any[] = [1, '11', [111], {name: 1111}, true];
// ...

// 第二种
var arr4:Array<Number> = [1, 11, 111, 1111];
var arr5:Array<String> = ['1', '11', '111', '1111'];
// ...类似第一种写法
// 以上两种写法表示数组内的值只能存对应类型的值


/* 元组类型 */
// 元组类型属于数组中的一种
var arr6:[Number, String] = [1, '1'];

// 以下错误写法
// var arr7:[Number, String] = ['1', 1];
// 这种属于 一个萝卜一个坑，且数据类型要对应

/* 枚举类型 */
/*
*   网上有挺多关于 枚举 的介绍，但不是很懂，也不知道我理解的是否对，说说我对 枚举 在编程语言里的理解
*   枚举是把一个不可枚举的值（通常是整型）用单词来罗列出来，比如程序出错后的错误代码、Http状态码、或者自定义的一些状态码通过单词枚举出来提高对程序的阅读与理解
*/
enum httpCode {
    continue    = 100,
    ok          = 200,
    created     = 201,
    accepted    = 202
    // ...
}

let state1:httpCode = httpCode.ok;
console.log(state1); // 200

// ------------------------------

enum err {
    enable,
    disable,
    done = 5,
    failure
}
let state2:err = err.enable;
console.log(state2); // 0
let state3:err = err.failure;
console.log(state3); // 6

// 注意：若没有赋值的情况下，默认等于它的下标，从0开始，若某一个赋值之后，该赋值后面的所有下标等于该值+n+1
// 顺序也要注意，如果我 enable 等于 6 的话，在 failure 没有赋值的情况下，failure 也等于6（因为 done 等于 5，所以加1），所以顺序一定要从小到大写

// 任意类型

// 顾名思义，为变量设置 any 类型的话，该变量的值可以是任意类型
let any:any = 10;
any = 'string';
any = false;
any = null;
// ...

// void类型

/**
 * void 表示没有任何类型，一般用于定义方法的时候，方法没有返回值，同C#
 * 声明类型不为 "void" 或 "any" 的函数必须返回值
**/
function say( str:String ):void {
    console.log('Hello', str);
}
function say1( str:String ):any {
    console.log('Hello', str);
}
say('TypeScript');
// Hello TypeScript
say1('Typescript');
// Hello Typescript

// 以下会出现警告
function add( num:number ):Number {
    console.log( num + 10);

    // 正确写法
    return num + 10;
}
add(10);
// ...

/**
 * never类型
 * 该类型比较特殊，应用的也很少，属于其它类型，表示从不会出现的值 或者 一直循环到世界爆炸都不会返回的值
 *  */

// 为让后面的代码正常执行，把该语句写在 try catch 中
try {
    let n = (()=>{ throw new Error('返回给你我抛出的异常')})();
} catch (error) {
    console.warn(error);
}

function loop(): never {
    while (true) {}
}

/* Null和Undefined */

var res1:Number;
// console.log(res1); //undefined。  res1 会导致TypeScript编译失败，因undefined 不属于 number 类型

// 如果针对某个响应的值有两种类型那么使用以下方法
var res2:Number | undefined;
console.log(res2); //undefined

// null 同上
var res3:Number | undefined | null;
console.log(res3); //undefined
