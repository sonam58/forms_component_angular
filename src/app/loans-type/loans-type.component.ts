import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans-type',
  templateUrl: './loans-type.component.html',
  styleUrls: ['./loans-type.component.css']
})
export class LoansTypeComponent implements OnInit{
 
 addLoanTypeForm! : FormGroup;
  constructor(private fb: FormBuilder) { }
  
/*
  trackLoanName(): void {
    console.log('Value changed');
  
  //changes happenning through the entire form control
    this.addLoanTypeForm.valueChanges.subscribe(data=>{
      console.log(data);
    })
//changes happening for a single formControl
    this.addLoanTypeForm.get('loanName')?.valueChanges.subscribe(data=>{
      console.log(data);
    })
  }
*/
  ngOnInit(): void {

  /*
    this.addLoanTypeForm = new FormGroup({
      'loanName':new FormControl(),
      'loanDescription': new FormControl(),
      'loanType':new FormControl()
    })
 */
 /*
 // Direct way of setting the form value at form creation
    this.addLoanTypeForm=this.fb.group({
      'loanName': new FormControl('personal loan'),
      'loanType': new FormControl('Home loan'),
      'loanDiscription': new FormControl('This is the loan application')
    })
  
*/
//one & simple way of defining a new form array
// let users = new FormArray([
//   new FormControl('Sonam'),
//   new FormControl('Yadav')
// ]);
//  console.log(users);
// console.log(users.value);

//Another way of setting value of form
    this.addLoanTypeForm=this.fb.group({
      'loanName':new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ]
      ),
      'loanType':new FormControl(),
      'loanDiscription':new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ])),
      //'loanAmount':new FormControl()

      //  'user':new FormArray([
      //   new FormControl('Sonam'),
      //   new FormControl('Yadav')
      // ]),
      
      'users':new FormArray([
        this.fb.group({
          'name':new FormControl('soasn'),
          'age': new FormControl('576'),
          'desig':new FormControl('fdgtry')
        })
      ])

     
    })
//valuechanges
    // this.addLoanTypeForm.get('loanName')?.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })

//Status changes

    this.addLoanTypeForm.get('loanName')?.statusChanges.subscribe(data=>{
      console.log(data);
    })
/*
    const newLoanObj={
      'loanName':'my personal loan',
      'loanType':'Gold Loan',
      'loanDiscription':'this is loan application',
      // 'loanAmount':" "
    }
*/
    //this.addLoanTypeForm.setValue(newLoanObj);
  }
 
  addLoanType(){
/*
    console.log(this.addLoanTypeForm.valid);//true
    console.log(this.addLoanTypeForm.invalid);//false
    console.log(this.addLoanTypeForm.pending);//false
    console.log(this.addLoanTypeForm.pristine);//false
    console.log(this.addLoanTypeForm.touched);//true
    console.log(this.addLoanTypeForm.untouched);//false
    console.log(this.addLoanTypeForm.dirty);//true
    //get the entire form value in one go
   console.log(this.addLoanTypeForm.value);
   */
/*
    //get the specific form control
    console.log(this.addLoanTypeForm.get('loanType')?.value);

    //get values on changes
    this.addLoanTypeForm.valueChanges.subscribe( data=> {
      console.log(data);
    })
  }
  */
}

resetForm(){
  this.addLoanTypeForm.reset();
}

get userFormGroups() {
  return this.addLoanTypeForm.get('users') as FormArray
}
addUser(){
  let userArr= this.userFormGroups;
  let newUser= this.fb.group({
    'name':'',
    'age':'',
    'desig':''
  })
  userArr.push(newUser);
}  

removeUsers(i: number){
let arr = this.userFormGroups;
arr.removeAt(i);
}

assignDesig(i: any){
  let arr=this.userFormGroups;  
  let values= arr.value;
  // arr.value[i].desig='software developer';
  // this.userFormGroups.setValue(arr.value)
  if(values[i].age>25){
    values[i].desig='stack developer';
  }
  else{
   values[i].desig='software developer';
  }

  this.userFormGroups.setValue(values);
}
}
