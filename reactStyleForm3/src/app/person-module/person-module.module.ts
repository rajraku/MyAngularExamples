import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const employeeRoutes: Routes = [  
  {
    path: 'employee/edit/:id',
    component: PersonEditComponent
  },
  {
    path: 'employee/:id',
    component: PersonViewComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule,
  RouterModule.forRoot(employeeRoutes),
  ReactiveFormsModule],
  declarations: [PersonViewComponent, PersonEditComponent, EmployeeListComponent],
  exports: [RouterModule, PersonViewComponent, PersonEditComponent]
})
export class PersonModule { }
