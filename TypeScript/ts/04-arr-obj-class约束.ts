/* 数组约束 */
interface arrRule {
    [index:number]: string;
}

let arr_1:arrRule = [ '1', '2', '3' ];
let arr_2:arrRule = [ '1', '2', '3', '4' ];

// 下面写法报错
// let arr_3:arrRule = [ 1, '2', '3', '4' ];

/* 对象约束 */
interface objRule {
    [index:string]: string;
}

let obj_1:objRule = {
    name: 'Bill',
    github: 'xuewuzhijin'
}

/* 类约束 */
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