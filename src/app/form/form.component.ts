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
  dob:string = '';
  email:string = '';

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'fmale', display:'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'}
  ]

  GeneratUsername(){
    let username = '';

    if(this.firstName.length>=3){
      username += this.firstName.slice(0, 3);
    }
    else{
      username += this.firstName;
    }

    if(this.lastName.length>=3){
      username += this.lastName.slice(0, 3);
    }
    else{
      username += this.lastName;
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear()
    username = username.toLowerCase();
    console.log(username);
  }
}
