import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,propName:string):any[] {

    const result:any=[];
 
    if(!value || filterString==='' || propName===''){
 
     return value;
 
    }
 
    value.forEach((a:any)=>{
 
     if(a[propName].trim().toLowerCase().include(filterString.toLowerCase())){
 
       result.push(a);
 
     }
 
    });
 
    return result;
 
   }

}
