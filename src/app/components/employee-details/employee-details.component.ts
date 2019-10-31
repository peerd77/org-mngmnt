import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee-service.service';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee$: any;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService
  ) { }

  ngOnInit() {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    );
  }

}
