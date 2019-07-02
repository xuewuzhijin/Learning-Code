
// interface Do{
//     ( thing:String, doSometing:Function ):any;
// }

// let doSomething:Do = function( a:String, b:Function ):any {
//     console.log( `${a}，${b()}`)
// }

// doSomething( 'Say', function(){
//     return 'Hello World';
// })


interface Do{
    ( thing:String, doSometing:( word:String )=>String ):any;
}

let doSomething:Do = function( a:String, b:( word:String )=>String ) {
    console.log( `${a} ${b( 'are you doing?' )}`)
}

doSomething( 'what', function( word ){
    return word;
})

interface Do1{
    ( arg1:String, arg2:Number ):String;
}

let doSomething1 = function( c:String, d:Number ):String {
    return String(c) + d;
}

console.log(doSomething1( 'age', 18 ));