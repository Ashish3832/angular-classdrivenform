import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor( private fb: FormBuilder){}
  
  registrationForm=this.fb.group({
    userName: ['',[Validators.required,Validators.minLength(4)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postal: ['']
    })
  });
  /*registrationForm = new FormGroup(
    {
      userName: new FormControl('Ashish'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postal: new FormControl('')
      })
    }
  );
  loadAPIdata()
  {
    this.registrationForm.setValue({
      userName: 'rob',
      password: 'rob@1234',
      confirmPassword: 'rob@1234',
      address: {
        city: 'London',
        state: 'England',
        postal: '123456'
      }
    });
  }*/
}
