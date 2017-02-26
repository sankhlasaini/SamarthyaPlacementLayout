import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JsonDataService]
})
export class LoginComponent implements OnInit {

  public languages = [];
  public userForm: FormGroup;
  public modalVerify: FormGroup;
  public modalReset: FormGroup;
  public infoobj;
  private postobject;


  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });

    // register candidate verfy email data
    this.modalVerify = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]]
    });

    // password reset data form
    this.modalReset = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]]
    });
  }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getLanguages().subscribe(resJsonData => this.getdata(resJsonData['languages']));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }

  // on login submit
  onSubmit() {
    console.log(this.userForm.value);
  }

  //snackBar for notification
  openSnackBar(message) {
    this.snackBar.open(message, "Please Check your Mail", {
       duration: 5000,
    });
  }

  // on create account submit
  onModalVerify() {
    this.infoobj = {
      'to': this.modalVerify.value.email,
      'subject': "Email verification",
      'redirect': "http://localhost:4200/candidateRegister",
      'mailBody': "Please Click on this link to verify your Email"
    }
    this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
      error => this.openSnackBar('VERIFICATION MAIL SENT'), () => console.log("finished"));
  }

  // on password reset submit
  onModalReset() {
    this.infoobj = {
      'to': this.modalReset.value.email,
      'subject': "Password Reset",
      'redirect': "http://localhost:4200/passwordReset",
      'mailBody': "Please Click on this link to Reset Account Password"
    }
    this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
      error =>this.openSnackBar('PASSWORD RESET LINK SENT'), () => console.log("finished"));
  }

}
