import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  //employeeservice:any="";

  constructor(public empService:EmployeeService) {
    //this.employeeservice=new EmployeeService();
  }


}
