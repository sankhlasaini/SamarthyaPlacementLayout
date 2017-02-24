import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';

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


  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService) {
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

  // on create account submit
  onModalVerify() {

    this.infoobj = {
      to: this.modalVerify.value.email,
      subject: " Email verification"
    }
    this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
      error => alert(error), () => console.log("finished"));
  }

  // on password reset submit
  onModalReset() {
    console.log(this.modalReset.value);
  }
}
