import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {

  //employeeservice:any="";

  constructor(public employeeservice:EmployeeService) {
    //this.employeeservice=new EmployeeService();

  }


}
