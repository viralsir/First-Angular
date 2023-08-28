import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-structure-directive2',
  templateUrl: './structure-driven2.component.html',
  styleUrls: ['./structure-driven2.component.css']
})
export class StructureDriven2Component {

  ProductformGroup=new FormGroup({
        p_id:new FormControl("",[Validators.required,Validators.min(0)]),
        p_name: new FormControl("",[Validators.required]),
        p_quantity: new FormControl("",[Validators.required,Validators.min(0)]),
        p_price: new FormControl("",[Validators.required,Validators.min(0)]),
        p_discount: new FormControl("",[Validators.required,Validators.min(0)])
  })

  Product_Data=[{"p_id":241700,"p_name":"Aasha","p_quantity":3,"p_price":3700,"p_discount":2}]

  addDATA(){
    // @ts-ignore
    this. Product_Data.push(this.ProductformGroup.value);
    this.ProductformGroup.reset();
  }

}
