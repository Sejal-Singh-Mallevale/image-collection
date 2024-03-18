import { Injectable } from '@angular/core';
import *  as Auth from  'aws-amplify/auth';
import { Router } from '@angular/router';
import { SignUpParameters } from '../../pages/features/shared/modals/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  isAuthenticated!: boolean;
  isSignUpComplete!: boolean;
  username!: string;

  constructor(private router: Router) {
  }
   
  async SignUp({username, password, email, phone_number, given_name, family_name, gender,role, address}: SignUpParameters) {
    try {
      let userAttributes = {
        email,
        phone_number,
        given_name,
        family_name,
        gender,
        'custom:role': role,
        address
      };
      const { isSignUpComplete, userId, nextStep } = await Auth.signUp({
        username,
        password,
        options: {
          userAttributes: userAttributes
        }
      });
  
      console.log('signup', isSignUpComplete, userId, nextStep);
      this.username = email;
      this.router.navigate(['auth/confirm-email']);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async SignIn({username, password} : Auth.SignInInput) {
    try {
      const { isSignedIn, nextStep } = await Auth.signIn({ username, password });
      console.log('signed in', isSignedIn, nextStep);
      this.username = username;
      this.isAuthenticated = true;
      this.router.navigate(['main']);
    } catch (error) {
      console.log('error signing in', error);
      this.isAuthenticated = false;
    }
  }

  async SignUpConfirmation({username, confirmationCode}: Auth.ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await Auth.confirmSignUp({
        username,
        confirmationCode
      });
      this.isSignUpComplete = isSignUpComplete;
      console.log('SignUpConfirmation', isSignUpComplete, nextStep);
      
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async SignOut() {
    try {
      await Auth.signOut({ global: true });
      this.isAuthenticated = false;
      console.log('sign out');
      this.router.navigate(['auth/sign-in']);
      
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}


