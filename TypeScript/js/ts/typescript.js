"use strict";
function doSomething(person) {
    console.log("Hello guys, \u6211\u7684\u540D\u5B57\u53EB" + person.name + "\uFF0C\u6211\u4ECA\u5E74" + person.age + "\u5C81\uFF0C\u6027\u522B" + person.gender);
}
var obj = {
    name: 'Michael',
    age: 18,
    gender: 'male'
};
doSomething(obj);
