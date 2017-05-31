import {Component ,OnInit ,OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { SharedService } from './component/shared.service';
@Component({
  selector: 'pipe-app',
  templateUrl: './app/template.html'
})
//<ul><li *ngFor="let val of data | searchbyname : username | orderbyname |  slice:0:limitValue">{{val?.name}}</li></ul>
export class CustomPipeComponent implements OnInit,OnDestroy{
	welcomeMsg = 'Home';
	birthday = new Date(1988, 3, 15);
    format = 'fullDate';
	childComponentSyncVal:string = '';
	limitValue = 100;
	username:string = '';
    data = [
		{name:"Rudra",age:"26"},
		{name:"Biswajit",age:"27"},
		{name:"Aditya",age:"25"},
		{name:"Otty",age:"28"},
		{name:"Satya",age:"23"},
		{name:"Manas",age:"24"},
		{name:"Saroj",age:"29"}
	];
	subscription:any;
	constructor(public userService:UserService,public sharedService:SharedService){}
	ngOnInit(){
		this.subscription = this.userService.userEvEmitObj.subscribe((data)=>this.eventEmittedFn(data));
	} 
	eventEmittedFn(data){
		alert(data);
	} 
	onBtnClick(){
		this.userService.sampleService();
	}
	ngOnDestroy(){
		this.subscription.unsubscribe();
		console.log("unsubscribe subscription");
	}
	parentFnCall(ev){
		this.childComponentSyncVal = ev;
		this.sharedService.siblingEmitService(ev);
	}
}
    