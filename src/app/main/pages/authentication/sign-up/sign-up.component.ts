import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/main/core/services/cognito.service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private cognitoService: CognitoService){ }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],  
    });
  }
  onSubmit(){
    console.log('onSubmit');
    this.cognitoService.SignUp({
      username: this.signUpForm.controls['email']?.value,
      password: this.signUpForm.controls['password']?.value,
      email: this.signUpForm.controls['email']?.value,
      phone_number: this.signUpForm.controls['phoneNumber']?.value,
      given_name: this.signUpForm.controls['firstName']?.value,
      family_name: this.signUpForm.controls['lastName']?.value,
      // 'custom:role': this.signUpForm.controls['role']?.value,
      role: this.signUpForm.controls['role']?.value,
      gender: this.signUpForm.controls['gender']?.value,
      address: this.signUpForm.controls['address']?.value
    });
  }
}
