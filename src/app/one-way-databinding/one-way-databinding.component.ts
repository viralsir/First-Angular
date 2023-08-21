import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-databinding',
  templateUrl: './one-way-databinding.component.html',
  styleUrls: ['./one-way-databinding.component.css']
})
export class OneWayDatabindingComponent {

  msg:string="";
  msg1:string="";
  sum(no1:any,no2:any){
   // no1.style.backgroundColor='red';
   // no1.disabled=true;
    let total=eval(no1.value)+eval(no2.value);
    this.msg=total;
   // no1.value="";
  }

  sub(no1:any,no2:any)
  {
    this.msg1=(eval(no1.value)-eval(no2.value))+"";
  }

}
