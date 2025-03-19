import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  reactiveForm: FormGroup;
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dob: new FormControl(null),
      gender: new FormControl(null),
      allfields: new FormGroup({
        address: new FormControl(null, Validators.required),
        country: new FormControl('', Validators.required),
        city: new FormControl(''),
        region: new FormControl(null),
        postalcode: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ]) 
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm)
    alert("Form is Submitted")
  }
  
  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  DeleteSkills(index: number){
    const control =  <FormArray>this.reactiveForm.get('skills')
    control.removeAt(index);
  }
}
