import { EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export class SharedService{
    //childSiblingEmitter = new EventEmitter<string>();   
    evSubject = new Subject<string>();
    childSiblingEmitter = this.evSubject.asObservable();
    siblingEmitService(data){
        //this.childSiblingEmitter.emit(data);
        this.evSubject.next(data);
    }
}