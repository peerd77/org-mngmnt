import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { BaseComponent } from 'src/app/components/common/base/base.component';
import { EmployeeModalOutput } from 'src/app/models/employeeModalOutput';

@Component({
  selector: 'app-employee-subordinates',
  templateUrl: './employee-subordinates.component.html',
  styleUrls: ['./employee-subordinates.component.scss']
})
export class EmployeeSubordinatesComponent extends BaseComponent implements OnInit, AfterContentInit {
  @Input() employeeId: string;
  subordinates$: Observable<Array<Employee>>;
  constructor(private service: EmployeeService) {
    super();
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.subordinates$ = this.service.getSubordinates(this.employeeId);
  }

  onSave(event: EmployeeModalOutput) {
    //TODO persist task;
  }

}
