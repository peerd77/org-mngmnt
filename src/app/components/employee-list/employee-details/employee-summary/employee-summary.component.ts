import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/components/common/base/base.component';
import { EmployeeModalOutput } from 'src/app/models/employeeModalOutput';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.scss']
})
export class EmployeeSummaryComponent extends BaseComponent implements OnInit, AfterContentInit {
  @Input() employee: Employee;
  manager$: Observable<Employee>;
  constructor(private service: EmployeeService) {
    super();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.manager$ = this.service.getManager(this.employee.id);
  }

  onSave(event: EmployeeModalOutput) {
    //TODO persist report;
  }

}
