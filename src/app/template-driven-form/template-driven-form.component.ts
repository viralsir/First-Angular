import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  msg="";
  checkUser(loginformRef:NgForm) {
     //console.log("check user is called");
     //console.log(loginformRef.value);
     let loginformdata=loginformRef.value;
     if(loginformdata.username=="admin" && loginformdata.password=="123")
     {
       this.msg="login successfull";
     }
     else{
       this.msg="username or password is wrong";
     }

  }
}
