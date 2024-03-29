import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function for password validation
export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    if (!password) {
      return null; // Return null if no password is provided (optional)
    }

    // Password pattern for validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    if (!passwordPattern.test(password)) {
      return { 'invalidPassword': true };
    }

    return null; // Return null if password is valid
  };
}

// Custom validator function for confirm password validation
export function confirmPasswordValidator(passwordControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;
    const passwordControl = control.parent?.get(passwordControlName);

    if (!password || !passwordControl) {
      return null;
    }

    if (password !== passwordControl.value) {
      return { 'passwordsNotMatch': true };
    }

    return null; // Return null if confirm password matches
  };
}

// // Example usage in a component
// export class MyComponent {
//   myForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.myForm = this.fb.group({
//       password: ['', [Validators.required, passwordValidator()]],
//       confirmPassword: ['', [Validators.required, confirmPasswordValidator('password')]]
//     });
//   }
// }
