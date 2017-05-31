"use strict";
var core_1 = require('@angular/core');
var UserService = (function () {
    function UserService() {
        this.userEvEmitObj = new core_1.EventEmitter();
    }
    UserService.prototype.sampleService = function () {
        this.userEvEmitObj.emit("Event emitted from user service successfully");
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map