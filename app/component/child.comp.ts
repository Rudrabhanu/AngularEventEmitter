import {Component ,OnInit ,OnDestroy,Input,Output,EventEmitter } from '@angular/core';
import { SharedService } from './shared.service';


@Component({
  selector: 'child-comp',
  template: `<div>
                <label><strong>Child Componenet :</strong></label>
                <input type="text" (ngModelChange)="childCompValUpdate(comp.value)" #comp [ngModel] ="childCompVal" >
              </div>`
})
export class childComponent implements OnInit{
    childCompVal:string;
    @Input() childCompValFromParent:string;
    @Output() evEmit = new EventEmitter<string>();
   constructor(private sharedService:SharedService){}
    ngOnInit(){
        this.childCompVal = this.childCompValFromParent;
    }
    childCompValUpdate(childCompVal){        
        //this.evEmit.emit(childCompVal);
        this.sharedService.siblingEmitService(childCompVal);
    }
}