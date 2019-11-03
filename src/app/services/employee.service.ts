import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Enums } from '../models/enums';
import { ObservableInput, Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { HttpService } from './http.service';
import { Api } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
employees: Array<Employee>;

  constructor(private httpService: HttpService) { 
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
  getEmployees(): Observable<Array<Employee>> {
    return this.httpService.get(Api.Employee.Employees, '');
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return this.httpService.get(Api.Employee.Employees, employeeId); 
  }

  getManager(employeeId: string): Observable<Employee> {
    return of(this.employees[0]);
  }

  getTasks(employeeId: string): Observable<Array<Task>> {
    if (! employeeId)
      throw Observable.throw("") ;

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

  getSubordinates(employeeId: string): Observable<Array<Employee>> {
    if (!employeeId)
      throw Observable.throw("");

    const subs = [];
    for (let i = 0; i < 5; i++) {
      let newSub = new Employee();
      newSub.id = `$(i + 1)`;
      newSub.firstName = `Suby${i + 1}`;
      newSub.lastName = `Ory${i + 1}`;
      newSub.position = Enums.EmployeePosition.Backend;
      subs.push(newSub);
    }
    return of(subs);
  }


}
