import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';
import { BaseComponent } from '../common/base/base.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent extends BaseComponent implements OnInit {
  employees$: Observable<Array<Employee>>;

  constructor(private employeeService:EmployeeService) {
    super();
  }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }

}
