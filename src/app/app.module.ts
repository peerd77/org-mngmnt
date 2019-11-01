import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { EmployeeSubordinatesComponent } from './components/employee-subordinates/employee-subordinates.component';
import { EmployeeReportsComponent } from './components/employee-reports/employee-reports.component';
import { ModalComponent } from './components/common/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FullNamePipe,
    EmployeeTasksComponent,
    EmployeeSubordinatesComponent,
    EmployeeReportsComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
