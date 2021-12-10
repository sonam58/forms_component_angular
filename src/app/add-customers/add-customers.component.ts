import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  firstname = " ";
  terms = false;
  customerType=" ";
  discription="";


  constructor() { }

  ngOnInit(): void {
  }
 
  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }

  resetForm(formValue:NgForm){
    formValue.reset();
  }
}
