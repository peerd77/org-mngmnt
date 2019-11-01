import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee$: Observable<Employee>;
  manager$: Observable<Employee>;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService
  ) { }

  ngOnInit() {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const employeeId = params.get('id');
        this.manager$ = this.service.getManager(employeeId);
        return this.service.getEmployee(employeeId);
      }));
  }

  onReportClick() {
    
  }

}
