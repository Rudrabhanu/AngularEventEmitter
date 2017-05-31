"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JSONData = (function () {
    function JSONData(name, age) {
        this.name = name;
        this.age = age;
    }
    return JSONData;
}());
var OrderByName = (function () {
    function OrderByName() {
    }
    OrderByName.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            return (a.name > b.name);
        });
        return array;
    };
    OrderByName = __decorate([
        core_1.Pipe({
            name: 'orderbyname'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByName);
    return OrderByName;
}());
exports.OrderByName = OrderByName;
var searchByName = (function () {
    function searchByName() {
    }
    searchByName.prototype.transform = function (array, args) {
        if (args.toLowerCase() === '') {
            return array;
        }
        var patt = new RegExp(args.toLowerCase());
        return array.filter(function (el) {
            return patt.test(el.name.toLowerCase());
        });
    };
    searchByName = __decorate([
        core_1.Pipe({
            name: 'searchbyname'
        }), 
        __metadata('design:paramtypes', [])
    ], searchByName);
    return searchByName;
}());
exports.searchByName = searchByName;
//# sourceMappingURL=orderBy.pipe.js.map