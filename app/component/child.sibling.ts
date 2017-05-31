import {Component ,OnInit ,OnDestroy,Input,Output,EventEmitter } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'child-sibling-comp',
  template: ` <div>
                <label><strong>Child Sibling Componenet :</strong></label>
                <input type="text" (ngModelChange)="childCompValUpdate(comp.value)" #comp  [(ngModel)] ="childCompVal" >
             </div> `
})
export class childSiblingComponent implements OnInit,OnDestroy{
    childCompVal:string;
    subscribeService;
    @Input() childCompValFromParent:string;
    @Output() evSiblingEmit = new EventEmitter<string>();
    constructor(private sharedService:SharedService){}
    ngOnInit(){
        this.childCompVal = this.childCompValFromParent;
        this.subscribeService = this.sharedService.childSiblingEmitter.subscribe((data) =>this.childCompVal = data);
    }
    childCompValUpdate(childCompVal){
        this.evSiblingEmit.emit(childCompVal);
    }
    ngOnDestroy(){
        this.subscribeService.unsubscribe();
    }
}