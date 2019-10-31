import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Enums } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

employees: Array<Employee>;

constructor() { 
    this.employees = [];
    Object.keys(Enums.EmployeePosition).forEach((key ,index) => {
      let employee = new Employee();
      employee.firstName = `FirstName${index}`
      employee.lastName = `LastName${index}`
      employee.position = Enums.EmployeePosition[key];
      this.employees.push(employee);
    });
  }
  getEmployees(): Array<Employee> {
    return this.employees;
  }
}
