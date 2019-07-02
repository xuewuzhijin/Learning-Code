# Typescript 函数定义

* [函数定义](#Typescript函数定义)
* [可选参数](#可选参数)
* [默认参数](#默认参数)
* [参数约束](#参数约束)
* [参数接口定义](#参数接口定义)
  * [接口可选参数](#接口可选参数)
* [函数接口定义](#函数接口定义)

## Typescript函数定义

Note：

1. 有返回值的函数定义 `[ number, string, boolean, array, object, any, ... ]`
2. 没有返回值的函数定义 `[ any, void ]`

```typescript
function fn():Number { return 1+1; };
function fn():String { return 1+'1'; };
function fn():Boolean { return false; };
function fn():Array { return [1, 2, 3]; };
function fn():any { return {name: 'bill', age: 18}; };
// ...

function fn():void { console.log('...') }
function fn():any { console.log('...') }
```

## 可选参数

Note：

1. 有返回值的函数定义，以下类型的函数必须要有返回值

```typescript
function fn( num1:Number, num2?:Number ):Number
{
    return num1 + (num2 ? num2 : 0);
}
fn(10,10);
// 20
fn(10)
// 10
```

## 默认参数

```typescript
function fn( num:Number, num1:Number = 10 ):Number
{
    return num + num1;
}
fn( 5, 5 );
// 10
fn( 10 );
// 20

```

## 参数约束

Note：

1. 传入的 `实参` 必须等同于 `约束对象` 的类型
2. 当对象被约束后，传入的 `实参对象` 必须等同于 `约束对象` 的 `KEY` 与 `值类型`
3. 传入的 `实参对象` 不能出现多于 `约束对象` 的键值对

```TypeScript
function argumentsRule( obj: { name:String } ) {
    console.log( obj.name );
}

argumentsRule({ name: 'Michael'})；
// Michael

argumentsRule({ name: 'Michael', age: 18 });
// 使用这种对象将会报错
```

## 参数接口定义

Note：

1. 接口的格式定义，`无需赋值`，`分号结束`
2. 如果传入的 `实参对象` 等同于 `接口对象的Size 和 类型` 那么可以直接把对象放在调用函数的括号内，如果不等于则 `重新定义一个变量并且包含接口内的键值对（类型要相同）`

```TypeScript
interface Person {
    name:   String;
    age:    Number;
    gender: String;
}

function doSomething( person:Person ):void {
    console.log( `Hello guys!
                我的名字叫${person.name}，我今年${person.age}岁，
                性别${person.gender}`
    )
}

let obj = {
    name:   'Michael',
    age:    18,
    gender: 'male'
}

doSomething( obj )
// Hello guys, 我的名字叫Michael，我今年18岁，性别male

doSomething({
    name:   'Mike',
    age:    18,
    gender: 'male',
    // height: 180  /* 添加这个就报错，须通过下面的方式来解决这个问题 */
})
// Hello guys, 我的名字叫Mike，我今年18岁，性别male

let obj1 = {
    name:   'Jane',
    age:    18,
    gender: 'female',
    height: 165
}

doSomething( obj )
// Hello guys, 我的名字叫Jane，我今年18岁，性别female
```

### 接口可选参数

```TypeScript
interface Person{
    name:   String;
    age:    Number;
    gender?:String;
}

function doSomething( obj:Person ):void {
    console.log( `Hello guys!
                我的名字叫${person.name}，我今年${person.age}岁，
                性别${person.gender}`
    )
}

let obj = {
    name:   'Jane',
    age:    18
}

doSomething(obj)
// Hello guys! 我的名字叫Jane，我今年18岁， 性别undefined


let obj1 = {
    name:   'Jane',
    age:    18,
    gender: 'female'
}
doSomething(obj1)
// Hello guys! 我的名字叫Jane，我今年18岁， 性别female
```

## 函数接口定义

```TypeScript
/* ------不带函数的形参------ */
// 接口
interface Do1{
    ( arg1:String, arg2:Number ):String;
}

let doSomething1 = function( c:String, d:Number ):String {
    return String(c) + d;
}

console.log(doSomething1( 'age ', 18 ));
// age 18


/* ------带函数的形参------ */
// 接口
interface Do{
    ( thing:String, doSometing:Function ):any;
}

let doSomething:Do = function( a:String, b:Function ):any {
    console.log( `${a}，${b()}`)
}

doSomething( 'Say', function(){
    return 'Hello World';
})
// Say，Hello World


/* ------带函数形参的约束------ */
// 接口
interface Do{
    ( thing:String, doSometing:( word:String )=>String ):any;
}

let doSomething:Do = function( a:String, b:( word:String )=>String ) {
    console.log( `${a} ${b( 'are you doing?' )}`)
}

doSomething( 'what', function( word ){
    return word;
})
// what are you doing?

```
