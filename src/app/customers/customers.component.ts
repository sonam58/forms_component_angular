import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  companyName="";
  firstName="";
  lastName="";
  phoneNo="";
  cancelReg="";
  management="";
  admin="";
  deployer="";
  partner="";
  developer="";
  expectation="";
  emailAddress="";
  veg="";
  nonVeg="";

  constructor() { }

  ngOnInit(): void {
  }

  customer(formValue:NgForm){
    console.log(formValue.value)
  }

}
