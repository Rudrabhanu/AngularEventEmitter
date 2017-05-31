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
var user_service_1 = require('./user.service');
var shared_service_1 = require('./component/shared.service');
var CustomPipeComponent = (function () {
    function CustomPipeComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.welcomeMsg = 'Home';
        this.birthday = new Date(1988, 3, 15);
        this.format = 'fullDate';
        this.childComponentSyncVal = '';
        this.limitValue = 100;
        this.username = '';
        this.data = [
            { name: "Rudra", age: "26" },
            { name: "Biswajit", age: "27" },
            { name: "Aditya", age: "25" },
            { name: "Otty", age: "28" },
            { name: "Satya", age: "23" },
            { name: "Manas", age: "24" },
            { name: "Saroj", age: "29" }
        ];
    }
    CustomPipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.userEvEmitObj.subscribe(function (data) { return _this.eventEmittedFn(data); });
    };
    CustomPipeComponent.prototype.eventEmittedFn = function (data) {
        alert(data);
    };
    CustomPipeComponent.prototype.onBtnClick = function () {
        this.userService.sampleService();
    };
    CustomPipeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        console.log("unsubscribe subscription");
    };
    CustomPipeComponent.prototype.parentFnCall = function (ev) {
        this.childComponentSyncVal = ev;
        this.sharedService.siblingEmitService(ev);
    };
    CustomPipeComponent = __decorate([
        core_1.Component({
            selector: 'pipe-app',
            templateUrl: './app/template.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, shared_service_1.SharedService])
    ], CustomPipeComponent);
    return CustomPipeComponent;
}());
exports.CustomPipeComponent = CustomPipeComponent;
//# sourceMappingURL=custompipe.component.js.map