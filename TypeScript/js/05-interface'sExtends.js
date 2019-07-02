"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 例子一 */
var world = /** @class */ (function () {
    function world(name) {
        this.name = name;
    }
    world.prototype.cDo = function () {
        console.log("welcome to " + this.name + "\uFF1Acats eat fish");
    };
    return world;
}());
var r1 = new world('animal world');
r1.cDo();
// welcome to animal world : cats eat fish
/* 例子二 */
var world1 = /** @class */ (function (_super) {
    __extends(world1, _super);
    function world1(name) {
        return _super.call(this, name) || this;
    }
    ;
    world1.prototype.cDo = function () {
        console.log("welcome to " + this.name + "\uFF1Acats eat fish");
    };
    ;
    world1.prototype.dDo = function () {
        console.log("welcome to " + this.name + "\uFF1Adogs eat meat");
    };
    ;
    return world1;
}(world));
var r2 = new world1('animal world');
r2.dDo();
// welcome to animal world : dogs eat meat
/* 例子三 */
var world2 = /** @class */ (function (_super) {
    __extends(world2, _super);
    function world2(name) {
        return _super.call(this, name) || this;
    }
    ;
    world2.prototype.cDo = function () {
        console.log("welcome to " + this.name + "\uFF1Acats eat fish");
    };
    ;
    world2.prototype.dDo = function () {
        console.log("welcome to " + this.name + "\uFF1Adogs eat meat");
    };
    ;
    world2.prototype.aDo = function () {
        console.log("welcome to " + this.name + "\uFF1Aaltman dozen small monster");
    };
    return world2;
}(world));
var r3 = new world2('animal world');
r3.aDo();
// welcome to animal world : altman dozen small monster
