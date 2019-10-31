import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Enums } from '../models/enums';
import { ObservableInput, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
employees: Array<Employee>;

constructor() { 
    this.employees = [];
    Object.keys(Enums.EmployeePosition).forEach((key ,index) => {
      let employee = new Employee();
      employee.id = ''+index;
      employee.firstName = `FirstName${index}`
      employee.lastName = `LastName${index}`
      employee.position = Enums.EmployeePosition[key];
      this.employees.push(employee);
    });
  }
  getEmployees(): Array<Employee> {
    return this.employees;
  }

  getEmployee(employeeId: string): ObservableInput<Employee> {
    return of(this.employees.find(e => e.id === employeeId)) 
  }

}
