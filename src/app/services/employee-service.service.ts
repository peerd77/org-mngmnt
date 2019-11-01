import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Enums } from '../models/enums';
import { ObservableInput, Observable, of } from 'rxjs';
import { Task } from '../models/task';

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

  getEmployee(employeeId: string): Observable<Employee> {
    return of(this.employees.find(e => e.id === employeeId)) 
  }

  getManager(employeeId: string): Observable<Employee> {
    return of(this.employees[0]);
  }

  getTasks(employeeId: string): Observable<Array<Task>> {
    const tasks = [];
    for (let i = 0; i < 5; i++) {
      let newTask = new Task();
      newTask.text = "Something todo";
      let now = new Date();
      let dueDate = new Date(now);
      dueDate.setDate(dueDate.getDate() + i);
      newTask.createDate = now;
      newTask.dueDate = dueDate;
      tasks.push(newTask);
    }
    return of(tasks);
  }


}
