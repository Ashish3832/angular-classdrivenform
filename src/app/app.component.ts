import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  registrationForm = new FormGroup(
    {
      userName: new FormControl('Ashish'),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }
  );
}
