import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  signupForm=new FormGroup({
     name:new FormControl(''),
     age:new FormControl(''),
     email:new FormControl('')
   });
   handleSubmit()
   {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
   }
}
