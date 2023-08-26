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
     name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
     age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    //  email:new FormControl('',[Validators.required, Validators.pattern('our pattern')])
     email:new FormControl('',[Validators.required, Validators.email]),
     pass:new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')])
   });
   handleSubmit()
   {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
   }
get f()
{
  return this.signupForm.controls
}

}
