# Typescript 泛型

在工作中，我们会碰到一些函数中的问题，比如说当你调用一个函数时，这个函数要求你传入的是什么类型那么返回的也是这个类型，而通过前面的知识我们只知道可以通过 any 来实现，而这个方法势必就造成了取消类型的检查，相当于可以传入任意类型和返回任意类型，但这并不是我们想要的结果。此时我们可以通过泛型来解决这个问题

## 目录

* [泛型定义](#泛型定义)
* [泛型函数](#泛型函数)
* [泛型类](#泛型类)
* [泛型接口](#泛型接口)
* [Note](#Note)
* [作业](#自己给自己出题)

## 泛型定义

通过添加类型变量 `T` 。 T可以帮助我们捕获用户传入的类型，通过在再次使用T时，返回捕获的类型值

## 泛型函数

```TypeScript
// 定义泛型函数
function editData<T>( name:T ):T{
    return name;
}
// 第一个T：明确指定传入类型；
// 第二个T：实参的类型；
// 第三个T：获取第二（一）个T类型并返回这个类型的值

// 调用泛型函数 -> 明确指定传入类型
editData<number>(123);
editData<string>('123');
// 等同于 -> 编译器自动识别类型
editData(123);
editData('123');
// 如果你的编译器不支持识别会报错，那么就需要指定传入类型来解决
```

## 泛型类

```TypeScript
class MinNumber<T> {
    public list:T[] = [];
    push( val:T ):void {
        this.list.push(val)
    };
    min():T {
        var origin = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if( origin > this.list[i] ) {
                origin = this.list[i];
            }
        }
        console.log(origin);
        return origin;
    }
};

let age = new MinNumber<number>();
age.push(5);
age.push(9);
age.push(4);
age.push(2);
age.push(0);
age.min();
// 0
```

## 泛型接口

```TypeScript
interface genericsFn {
    T(property:T):T;
}

var get:genericsFn = function(property:T):T {
    return property;
}

get('xuewuzhijin');
get<number>(100);
```

## 自己给自己出题

```JavaScript
// 下面是我想到的一个问题，如何用TS写出下面的语句
// 1. add函数参数支持三个类型 number string array
"use strict";
function Min() {
    this.list = [];
    // 新增
    this.add = function add(val) {
        if( Array.isArray(val) ) {
            this.Array(val)
        } else {
            this.list.push(val);
        }
    };
    // 获取最小值
    this.min = function min() {
        return Math.min.apply(null, this.list);
    };
    // 数组合并
    this.Array = function Array(val) {
        this.list.push(...val);
    }
}
var min = new Min();
min.add([20,50,80,100,'8',35,47,55]);
min.add(1);
min.add(15);
min.add(['0','34',64,88,32,'43']);
min.add(26);
min.min();
// 0
```

## 答案

```TypeScript
class Min {
    public list:Array<number | string> = [];
    add( val:string | number | Array<string | number> ):void {
        if( Array.isArray(val) ) {
            this.Array(val)
        } else {
            this.list.push(val);
        }
    };
    min():number | string {
        var origin = this.list[0];
        for (let i = 1; i < this.list.length; i++) {
            if(origin > this.list[i]) {
                origin = this.list[i];
            }
        }
        console.log(origin);
        return origin;
    };
    Array(val:Array<number | string >) {
        // this.list = this.list.concat([].slice.call(val));
        // this.list = [...this.list, ...[].slice.call(val)];
        // [].push.apply(this.list, [].slice.call(val));
        this.list.push(...val);
    }
}
var min = new Min();
min.add([20,50,80,100,'8',35,47,55]);
min.add(1);
min.add(15);
min.add(['0','34',64,88,32,'43']);
min.add(26);
min.min();
// 0
```
