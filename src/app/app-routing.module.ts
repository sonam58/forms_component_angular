import { LoansTypeComponent } from './loans-type/loans-type.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  // {
  //   path: 'add-customer',
  //   component: AddCustomersComponent
  // },
  // {
  //   path:'customer',
  //   component: CustomersComponent
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent
  // },
  {
    path: 'loanstype',
    component: LoansTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
