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
var childSiblingComponent = (function () {
    function childSiblingComponent(sharedService) {
        this.sharedService = sharedService;
        this.evSiblingEmit = new core_1.EventEmitter();
    }
    childSiblingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.childCompVal = this.childCompValFromParent;
        this.subscribeService = this.sharedService.childSiblingEmitter.subscribe(function (data) { return _this.childCompVal = data; });
    };
    childSiblingComponent.prototype.childCompValUpdate = function (childCompVal) {
        this.evSiblingEmit.emit(childCompVal);
    };
    childSiblingComponent.prototype.ngOnDestroy = function () {
        this.subscribeService.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], childSiblingComponent.prototype, "childCompValFromParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], childSiblingComponent.prototype, "evSiblingEmit", void 0);
    childSiblingComponent = __decorate([
        core_1.Component({
            selector: 'child-sibling-comp',
            template: " <div>\n                <label><strong>Child Sibling Componenet :</strong></label>\n                <input type=\"text\" (ngModelChange)=\"childCompValUpdate(comp.value)\" #comp  [(ngModel)] =\"childCompVal\" >\n             </div> "
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], childSiblingComponent);
    return childSiblingComponent;
}());
exports.childSiblingComponent = childSiblingComponent;
//# sourceMappingURL=child.sibling.js.map