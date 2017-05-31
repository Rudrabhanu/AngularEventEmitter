import {Component ,OnInit ,OnDestroy,Input,Output,EventEmitter ,ElementRef,ViewChild} from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'child-sibling-comp',
  template: ` <div>
                <label><strong>Child Sibling Componenet :</strong></label>
                <h3 #header> Header </h3>
                <input type="text" (ngModelChange)="childCompValUpdate(comp.value)" #comp  [(ngModel)] ="childCompVal" /><br/>
                <button (click)="togglecolor()" style="margin-top:20px">Click Me to Change Header color</button>
             </div> `
})
 //<div (click)="togglecolor()" [style.backgroundColor]="isSpecial ? 'red': 'green'">Click Me to Change Color</div>
export class childSiblingComponent implements OnInit,OnDestroy{
    @Input() childCompValFromParent:string;
    @Output() evSiblingEmit = new EventEmitter<string>();
    @ViewChild('header') header:ElementRef;
    childCompVal:string;
    subscribeService;
    isSpecial:boolean = false;    
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
    togglecolor(){
        this.isSpecial = !this.isSpecial;
        this.header.nativeElement.style.color = ( this.header.nativeElement.style.color === 'green') ? 'red': 'green';
    }
}