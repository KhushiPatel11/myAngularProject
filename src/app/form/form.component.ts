import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // Template-Driven Form
  OnFormSubmitted(form: NgForm){
    console.log(form);
    console.log(form.value.firstname);
  }

  firstName:string = '';
  lastName:string = '';
  email:string = '';

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'fmale', display:'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'}
  ]
}
