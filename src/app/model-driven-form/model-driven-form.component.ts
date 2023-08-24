import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {

  StudentFormGroup=new FormGroup({
    rno:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    maths:new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    science:new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    english:new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)])
  })
  status:string="";
  studentView() {
    console.log(this.StudentFormGroup.value);
   //  this.studentformdata=this.StudentFormGroup.value;
  }

  pass_fail()
  {
     let student=this.StudentFormGroup.value;
     if(student.maths !=undefined && student.english !=undefined && student.science != undefined) {


       // @ts-ignore
       if (student.maths >= 35 && student.english >= 35 && student.science >= 35) {
         this.status = "student is pass";
       } else {
         this.status = "student is fail";
       }
     }
   //  this.StudentFormGroup.reset();
  }


}
