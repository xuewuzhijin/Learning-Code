# Typescript 数组、对象、Class类的约束

* [数组约束](#数组约束)
* [对象约束](#对象约束)
* [类约束](#类约束)

## 数组约束

Note：

1. 数组长度无限制
2. 数组 `值` 类型要注意

```TypeScript
interface arrRule {
    [index:number]: string;
}

let arr_1:arrRule = [ '1', '2', '3' ];
let arr_2:arrRule = [ '1', '2', '3', '4' ];

// 下面写法报错
let arr_3:arrRule = [ 1, '2', '3', '4' ];

```

## 对象约束

Note：

1. 对象 `Size` 无限制
2. 对象 `值` 类型要注意

```TypeScript
interface objRule {
    [index:string]: string;
}

let obj_1:objRule = {
    name: 'Bill',
    github: 'xuewuzhijin'
}
```

## 类约束

Note：

1. 接口类型与类的属性类型要对应
2. 函数有形参的调用时必须要有实参

```TypeScript
interface PersonRule {
    name: string;
    say( word:string ):void;
}

class Person implements PersonRule {
    constructor( name: string ) {
        this.name = name;
    };
    name: string;
    say( word:string ) {
        console.log( this.name + '说：' + word);
    }
}

let obj = new Person('Bill');
obj.say( 'hi guys' );
```
