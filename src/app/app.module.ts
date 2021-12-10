import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

import { LoansTypeComponent } from './loans-type/loans-type.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomersComponent,
    ProfileComponent,
    LoansTypeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
