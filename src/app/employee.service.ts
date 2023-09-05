import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public Employees=[{"id":1,"name":"vimal","salary":15000},
    {"id":2,"name":"amit","salary":23000}]
  constructor() { }

   public entry(EmployeeData:any){
      this.Employees.push(EmployeeData);
   }


}
