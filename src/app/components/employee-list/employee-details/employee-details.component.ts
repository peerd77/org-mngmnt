import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee';
import { BaseComponent } from '../../common/base/base.component';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent extends BaseComponent implements OnInit {
  employee$: Observable<Employee>;
  manager$: Observable<Employee>;

  constructor(private route: ActivatedRoute, private service: EmployeeService) {
    super();
  }

  ngOnInit() {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const employeeId = params.get('id');
        return this.service.getEmployee(employeeId);
      }));
  }

  onModalSave(event: {text:string, date: Date}){
    console.log('date ', event.date);
    console.log('text ', event.text);
  }

}
