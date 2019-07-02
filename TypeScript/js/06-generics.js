"use strict";
var MinNumber = /** @class */ (function () {
    function MinNumber() {
        this.list = [];
    }
    MinNumber.prototype.push = function (val) {
        this.list.push(val);
    };
    ;
    MinNumber.prototype.min = function () {
        var origin = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (origin > this.list[i]) {
                origin = this.list[i];
            }
        }
        console.log(origin);
        return origin;
    };
    return MinNumber;
}());
;
var age = new MinNumber();
age.push(5);
age.push(9);
age.push(4);
age.push(2);
age.push(0);
age.min();
// 0
