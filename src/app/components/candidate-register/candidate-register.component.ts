import { Component, OnInit, Inject, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { JsonDataService } from '../../services/json-data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css'],
  providers: [JsonDataService]
})
export class CandidateRegisterComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public profession = [];
  public locations = [];
  public placementCenter = [];
  public userForm: FormGroup;
  public emailId = '';

  ngOnInit() {
    // getting languages and form data from json file 
    this.JsonDataService.getLanguages().subscribe(resJsonData => this.getdata(resJsonData));
    this.emailId = this.route.snapshot.params['id'];
    this.route.snapshot.data['type'];
  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router) {
    // register candidate form
    this.userForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gender: ['male', Validators.required],
      email: [''],
      regId: ['', Validators.required],
      // dob:'',
      aadhar: ['', [Validators.required, ValidationService.aadharValidator]],
      mob: ['', [Validators.required, ValidationService.mobValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      conPassword: ['', [Validators.required, ValidationService.passwordValidator]],
      profession: ['', [Validators.required]],
      location: ['', [Validators.required]],
      placementCenter: ['', [Validators.required]]
    });
  }

  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
    this.profession = this.jsonObj['profession'];
    this.locations = this.jsonObj['locations'];
    this.placementCenter = this.jsonObj['placementCenter'];
  }

  // password confirm Validators
  password: string = "";
  passwordMatchWarning: string = "";
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass) {
    if (this.password != conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById("resetBtn")).disabled = true;
    }
    else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById("resetBtn")).disabled = false;
    }
  }

  // on form submit
  onSubmit() {
    this.userForm.value.email = this.emailId;
    console.log(this.userForm.value);
  }
}
