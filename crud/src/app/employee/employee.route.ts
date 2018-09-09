import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "src/app/employee/employee.component";


const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

export const EmpRoute: ModuleWithProviders = RouterModule.forRoot(routes);