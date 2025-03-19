import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from '../Validators/noSpaceAllowed.validator'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  reactiveForm: FormGroup;
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, customValidators.noSpaceAllowed]),
      lastname: new FormControl('', [Validators.required, customValidators.noSpaceAllowed]),
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
      ]),
     experience: new FormArray([
      
     ])
    })

    this.reactiveForm.get('firstname').valueChanges.subscribe((value) => {
      console.log(value);
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
    const control =  <FormArray>this.reactiveForm.get('skills');
    control.removeAt(index);
  }

  AddExperience(){
    const frmGrp =   new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(frmGrp);
  }

  DeleteExperience(index: number){
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }
}
