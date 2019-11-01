import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit, AfterContentInit {
  @Input() employeeId: string
  tasks$: Observable<Array<Task>>;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    this.tasks$ = this.service.getTasks(this.employeeId);
  }

}
