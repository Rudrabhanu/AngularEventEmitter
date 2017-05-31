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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var custompipe_component_1 = require('./custompipe.component');
var welcome_pipe_1 = require('./welcome.pipe');
var filter = require('./orderBy.pipe');
var user_service_1 = require('./user.service');
var child_comp_1 = require('./component/child.comp');
var child_sibling_1 = require('./component/child.sibling');
var shared_service_1 = require('./component/shared.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule],
            declarations: [welcome_pipe_1.default,
                custompipe_component_1.CustomPipeComponent,
                filter.OrderByName,
                filter.searchByName,
                child_comp_1.childComponent,
                child_sibling_1.childSiblingComponent],
            providers: [user_service_1.UserService, shared_service_1.SharedService],
            bootstrap: [custompipe_component_1.CustomPipeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=module.js.map