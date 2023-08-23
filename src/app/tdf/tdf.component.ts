import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent
{

  student:any="";
  viewStudent(studentFormRef: NgForm)
  {
         //console.log(studentFormRef.value);
    this.student=studentFormRef.value;
    if(eval(this.student.maths)>=35 && eval(this.student.science)>=35 && eval(this.student.english)>=35)
    {
       this.student["status"]="Pass";
    }
    else {
      this.student["status"]="Fail";
    }



  }
}
