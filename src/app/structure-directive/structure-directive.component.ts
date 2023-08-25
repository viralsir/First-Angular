import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {


  UserFormGroup=new FormGroup({
    "name":new FormControl("",[Validators.required]),
    "salary":new FormControl("",[Validators.required,Validators.min(0)])
  })


  show:boolean=false;
  label:string="show";

  names=["vimal","viren","vijay","vikash","vipul","raj"]

  userInfo=[{"name":"vimal","salary":2300},
            {"name":"viren","salary":3400},
            {"name":"Amit","salary":23000},
            {"name":"raj","salary":23000}]

  showcontent() {

    if (this.show==true){
      this.show=false;
      this.label="show";
    }
    else{
      this.label="hide";
      this.show=true;
    }
  }

  AddUser() {
        // @ts-ignore
    this.userInfo.push(this.UserFormGroup.value);
    this.UserFormGroup.reset();
  }
}
