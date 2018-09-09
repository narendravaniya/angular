import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpRoute } from 'src/app/employee/employee.route';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeeService } from '../shared/services/employee.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    EmpRoute,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    EmployeeComponent
  ],
  providers: [EmployeeService],
  exports: []
})

export class EmployeeModule { }
