# Typescript 接口的继承

## 目录

* [接口](#接口)
  * [例子一](#例子一)
  * [例子二](#例子二)
  * [例子三](#例子三)
* [Note](#Note)
* [随手瞎写](#随手瞎写)

## 接口

> 以下三个例子均都按照下面三个接口来实现

```TypeScript
interface Animal {
    name: string;
}

interface Cat extends Animal {
    cDo():void;
}

interface Dog {
    dDo():void;
}

interface Altman extends Dog {
    aDo():void;
}
```

### 例子一

```TypeScript
class world implements Cat {
    constructor( name:string ) {
        this.name = name;
    }
    public name:string;
    cDo(){
        console.log(`welcome to ${this.name}：cats eat fish`);
    }
}

let r1 = new world('animal world');
r1.cDo();
// welcome to animal world : cats eat fish
```

### 例子二

```TypeScript
class world1 extends world implements Dog {
    constructor( name: string ) {
        super(name);
    };
    cDo(){
        console.log(`welcome to ${this.name}：cats eat fish`);
    };
    dDo(){
        console.log(`welcome to ${this.name}：dogs eat meat`);
    };
}
let r2 = new world1('animal world');
r2.dDo();
// welcome to animal world : dogs eat meat
```

### 例子三

```TypeScript
class world2 extends world implements Altman {
    constructor( name: string ) {
        super(name);
    };
    cDo(){
        console.log(`welcome to ${this.name}：cats eat fish`);
    };
    dDo(){
        console.log(`welcome to ${this.name}：dogs eat meat`);
    };
    aDo(){
        console.log(`welcome to ${this.name}：altman dozen small monster`);
    }
}
let r3 = new world2('animal world');
r3.aDo();
// welcome to animal world : altman dozen small monster
```

### Note

1. 类能继承类 接口能继承接口 类不能通过 `extends` 来继承接口，只能通过 `implements` 来约束类的类型，若需要继承多个接口，看例子二、三

## 随手瞎写

```TypeScript
interface _Document {
    document:string;
}

interface _Window extends _Document {
    outer_height:number;
    outer_width:number;
}

class Dom implements _Window {
    constructor( fn:() => Function ) {
        this.$ = fn();
    }
    public $:Function;
    public height:number = 1080;
    public width:number = 1920; 
    document:string = 'document api';
    outer_height:number = 1040;
    outer_width:number = 1920;
}

let _dom = new Dom( ():Function => {
    return ( el:string ) => {
        console.log(el)
    }
} )

_dom.$('div')
// div
```
