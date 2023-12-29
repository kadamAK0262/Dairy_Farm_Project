import { Router } from '@angular/router';

import { SignupService } from './../services/signup.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder, } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent  {
  // signupForm: FormGroup;

  signupForm: FormGroup;
  hide = true;
  
  userData: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router : Router,
    private snackBar: MatSnackBar
    
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

  submitted = false;
  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;  
      this.signupService.signUp(formData).subscribe(
        (response) => {
          console.log('Signup successful', response);
          this.userData = response;
          console.log("email message",this.userData.email)
          if(this.userData.email ==null){
            this.submitted= false
            // this.router.navigate(['/index'])
          }
          else{       
            this.submitted = true;
            this.router.navigate(['/dashboard'])
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000, // Duration in milliseconds
        
      });
          }
        },
        (error) => {
          console.error('Signup failed', error);
        }
      );
      
    }
    
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getPasswordErrorMessage() {
    
    const passwordControl = this.signupForm.get('password');
    const confirmPasswordControl = this.signupForm.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      
      return 'Controls not found';
    }
  
    if (passwordControl.hasError('required') || confirmPasswordControl.hasError('required')) {
      return 'Password is required';
    }
  
    if (passwordControl.value !== confirmPasswordControl.value) {
      return 'Passwords do not match';
    }
  
    return '';
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // getPasswordMessage(){
  //   if this.
  // }
}
