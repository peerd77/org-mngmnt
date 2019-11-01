import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee$: any;
  gotData: boolean;
  manager$: any;

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
