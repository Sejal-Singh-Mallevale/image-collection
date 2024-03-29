import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CognitoService } from 'src/app/main/core/services/cognito.service.service';
import { passwordValidator } from '../../features/shared/form-validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  signInForm!: FormGroup;

  constructor(private fb: FormBuilder, private cognitoService: CognitoService){}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]]
    });
  }

  onSubmit(){
    console.log('onSubmit');
    this.cognitoService.SignIn({
      username:this.signInForm.controls['email'].value,
      password:this.signInForm.controls['password'].value
    });
  }
}
