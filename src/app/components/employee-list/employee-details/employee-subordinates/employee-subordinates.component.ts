import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-subordinates',
  templateUrl: './employee-subordinates.component.html',
  styleUrls: ['./employee-subordinates.component.scss']
})
export class EmployeeSubordinatesComponent implements OnInit, AfterContentInit {
  @Input() employeeId: string;
  subordinates$: Observable<Array<Employee>>;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.subordinates$ = this.service.getSubordinates(this.employeeId);
  }

}
