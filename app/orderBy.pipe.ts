import {Pipe, PipeTransform} from '@angular/core';

class JSONData {
	constructor(public name:string,public age:number) {
	}
}

@Pipe({
    name:'orderbyname'
})
export class OrderByName implements PipeTransform{   
    transform(array,args:any):JSONData[]{
        array.sort((a,b) =>{
             return (a.name > b.name);
        })
        return array;
    }
}

@Pipe({
    name:'searchbyname'
})
export class searchByName implements PipeTransform{   
    transform(array,args:any):JSONData[]{        
        if(args.toLowerCase() === ''){return array}
        var patt = new RegExp(args.toLowerCase());      
        return array.filter((el) =>{
            return patt.test(el.name.toLowerCase()) ;
        });        
    }
}