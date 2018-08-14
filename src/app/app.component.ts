import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mohalla';
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() 
  {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getMyStyles() {
    let myStyles = {
       'background': '#f8f9fa'
    };
    return myStyles;
  } 
}
