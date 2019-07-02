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

/* 例子一 */
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

/* 例子二 */
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

/* 例子三 */
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