import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CognitoService } from 'src/app/main/core/services/cognito.service.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit{
  confirmEmailForm!: FormGroup;
  isVerifiedEmail!: boolean;
  username!:string;

  constructor(private fb: FormBuilder, private cognitoService: CognitoService){ }

  ngOnInit(): void {
    this.confirmEmailForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]]
    });
    this.isVerifiedEmail = this.cognitoService?.isSignUpComplete;
    this.username = this.cognitoService?.username;
  }

  onSubmit(){
    console.log('onSubmit email');
    
    this.cognitoService.SignUpConfirmation({
      username: this.username,
      confirmationCode: this.confirmEmailForm.controls['otp'].value,
    });
  }

}
