"use strict";
var arr_1 = ['1', '2', '3'];
var arr_2 = ['1', '2', '3', '4'];
var obj_1 = {
    name: 'Bill',
    github: 'xuewuzhijin'
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.say = function (word) {
        console.log(this.name + '说：' + word);
    };
    return Person;
}());
var obj = new Person('Bill');
obj.say('hi guys');
