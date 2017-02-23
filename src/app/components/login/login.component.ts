import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public languages = [
    { name: 'English' },
    { name: 'Hindi' },
  ];
  public userForm: FormGroup ;
  public modalVerify:FormGroup;
  public modalReset:FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.userForm = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
    this.modalVerify = fb.group({
      email: ['', [Validators.required,ValidationService.emailValidator]]
    });
     this.modalReset = fb.group({
      email: ['', [Validators.required,ValidationService.emailValidator]]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
  onModalVerify(){
    console.log(this.modalVerify.value);
  }
  onModalReset(){
    console.log(this.modalReset.value);
  }
}
