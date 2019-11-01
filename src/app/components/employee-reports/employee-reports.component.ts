import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-employee-reports',
  templateUrl: './employee-reports.component.html',
  styleUrls: ['./employee-reports.component.scss']
})
export class EmployeeReportsComponent implements OnInit, AfterContentInit {
  @Input() employeeId: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    
  }

}
