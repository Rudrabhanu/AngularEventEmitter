import { EventEmitter } from '@angular/core';
export class UserService {
    userEvEmitObj = new EventEmitter<string>();
    sampleService(){
        this.userEvEmitObj.emit("Event emitted from user service successfully");
    }
}