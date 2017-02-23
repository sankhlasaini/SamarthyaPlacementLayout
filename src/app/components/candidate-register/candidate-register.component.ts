import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';


@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent {

  public languages = [
    { name: 'English' },
    { name: 'Hindi' },
  ];

  public profession = [
    { name: 'BPO', value: 'bpo' },
    { name: 'Full Stack Developer', value: 'fullStackDev' },
    { name: 'Civil Aviation', value: 'civilAviation' },
    { name: 'Retail', value: 'retail' },
    { name: 'Logistic Coordinator', value: 'logistic' }
  ];

  public locations = [
    { name: 'Electronic City', value: 'electronicCity' },
    { name: 'Koramangla', value: 'koramangla' },
    { name: 'Whitefield', value: 'whitefield' },
    { name: 'Pune', value: 'pune' },
  ];
  public placementCenter = [
    { name: 'Banglore', value: 'bangalore' },
    { name: 'Pune', value: 'pune' },
    { name: 'NIIT', value: 'niit' }
  ];

  public userForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.userForm = fb.group({
      fname: '',
      lname: '',
      gender:'',
      email: ['', [Validators.required, ValidationService.emailValidator]],
      regId: '',
      aadhar: '',
      mob: '',
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      conPassword: '',
      profession: '',
      location: '',
      placementCenter: ''
    });
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
}
