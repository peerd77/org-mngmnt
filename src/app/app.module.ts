import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-list/employee-details/employee-details.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { EmployeeTasksComponent } from './components/employee-list/employee-details/employee-tasks/employee-tasks.component';
import { EmployeeSubordinatesComponent } from './components/employee-list/employee-details/employee-subordinates/employee-subordinates.component';
import { EmployeeReportsComponent } from './components/employee-list/employee-details/employee-reports/employee-reports.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { BaseComponent } from './components/common/base/base.component';
import { EmployeeSummaryComponent } from './components/employee-list/employee-details/employee-summary/employee-summary.component';
import { ModalContentComponent } from './components/common/modal/modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnumKeyPipe } from './pipes/enum-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FullNamePipe,
    EmployeeTasksComponent,
    EmployeeSubordinatesComponent,
    EmployeeReportsComponent,
    ModalComponent,
    BaseComponent,
    EmployeeSummaryComponent,
    ModalContentComponent,
    EnumKeyPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  entryComponents: [
    ModalContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
