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
var shared_service_1 = require('./shared.service');
var childComponent = (function () {
    function childComponent(sharedService) {
        this.sharedService = sharedService;
        this.amount = 20000;
        this.evEmit = new core_1.EventEmitter();
    }
    childComponent.prototype.childCompValUpdate = function (childCompVal) {
        //this.evEmit.emit(childCompVal);
        this.sharedService.siblingEmitService(childCompVal);
    };
    childComponent.prototype.ngOnInit = function () {
        this.childCompVal = this.childCompValFromParent;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], childComponent.prototype, "childCompValFromParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], childComponent.prototype, "evEmit", void 0);
    childComponent = __decorate([
        core_1.Component({
            selector: 'child-comp',
            template: "<div>\n                <label><strong>Child Componenet :</strong></label>\n                <input type=\"text\" (ngModelChange)=\"childCompValUpdate(comp.value)\" #comp [ngModel] =\"childCompVal\" >\n                <br/>\n                <strong>{{amount | currency}}</strong>\n              </div>"
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], childComponent);
    return childComponent;
}());
exports.childComponent = childComponent;
//# sourceMappingURL=child.comp.js.map