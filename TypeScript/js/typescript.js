"use strict";
// interface Do{
//     ( thing:String, doSometing:Function ):any;
// }
var doSomething = function (a, b) {
    console.log(a + " " + b('are you doing?'));
};
doSomething('what', function (word) {
    return word;
});
var doSomething1 = function (c, d) {
    return String(c) + d;
};
console.log(doSomething1('age', 18));
