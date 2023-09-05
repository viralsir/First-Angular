import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {

  //employeeservice:any="";
  employeeGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl("",[Validators.required]),
    salary:new FormControl("",[Validators.required,Validators.min(0)])
  })




  constructor(public employeeservice:EmployeeService) {
    //this.employeeservice=new EmployeeService();

  }


  addData() {
    let formdata=this.employeeGroup.value;
    this.employeeservice.entry(formdata);
    this.employeeGroup.reset();
  }
}
