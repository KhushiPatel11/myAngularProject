import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {  
  OnFormSubmitted(form: NgForm){
    console.log(form)
    console.log(form.value.fname)
    console.log(form.value.lname)
    console.log(form.value.email)
    console.log(form.value.p_num)
    console.log(form.value.dob)
    console.log(form.value.gender)
    // console.log(form.controls['fname'].value)
  }
  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]
}
