import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  reactiveForm: FormGroup;
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl(null),
      address: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      postalCode: new FormControl(null)
    })
  }
}
