"use strict";
var Subject_1 = require('rxjs/Subject');
var SharedService = (function () {
    function SharedService() {
        //childSiblingEmitter = new EventEmitter<string>();   
        this.evSubject = new Subject_1.Subject();
        this.childSiblingEmitter = this.evSubject.asObservable();
    }
    SharedService.prototype.siblingEmitService = function (data) {
        //this.childSiblingEmitter.emit(data);
        this.evSubject.next(data);
    };
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map