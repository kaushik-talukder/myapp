import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeFormComponent} from './employees/employee-form/employee-form.component';
import {EmployeeComponent} from './employees/employee/employee.component';
import {StudentsComponent} from './students/students.component';
import {StudentFormComponent} from './students/student-form/student-form.component';
import {StudentComponent} from './students/student/student.component';
import {Routes, RouterModule} from '@angular/router';
import {CoronaReportComponent} from './corona-report/corona-report.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    component: ServersComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'corona-report',
    component: CoronaReportComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    StudentsComponent,
    StudentFormComponent,
    StudentComponent,
    CoronaReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
