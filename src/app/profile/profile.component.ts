import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uname="";
  middleName="";
  password="";
  age="";
  male="";
  female="";
  tech1="";
  tech2="";
  tech3="";
  extc="";
  comps="";
  mech="";
  elec="";
  mumbai="";
  pune="";
  gurgaon="";
  bangluru="";
  chennai="";
  rajsthan="";
  resume="";
  eMail="";
  contact="";
  date="";
  clr="";
  birthTime="";
  birthDate="";
  address="";


  constructor() { }

  ngOnInit(): void {
  }
  profile(formValue:NgForm){
      console.log(formValue.value)
  }
}
