import { LoginService } from './../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  hide = true;
  data : any;

  constructor(
    private fb: FormBuilder, 
    private MatSnackBar: MatSnackBar,
    private loginService: LoginService,
    private router : Router) {  
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
  }
  submitForm(): void{
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.loginService.login(email, password).subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);

          this.MatSnackBar.open('Logged in successfully!', 'Close', {
            duration: 2000
          });

          if (this.data === true) {
            this.router.navigate(['/dashboard']);
            this.MatSnackBar.open('Logged in successfully!', 'Close', {
              duration: 2000
            });
          } else {
            console.log('Login failed');
            this.MatSnackBar.open(
              'Login failed. Check your credentials.',
              'Close',
              {
                duration: 2000
              }
            );
          }
        },
        (error: any) => {
          console.error('Error:', error);
          this.MatSnackBar.open(
            'Login failed. Check your credentials.',
            'Close',
            {
              duration: 2000
            }
          );
        }
      );
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return;
    }
    return this.loginForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  togglePasswordVisibility(event: Event): void {
    event.stopPropagation();
    this.hide = !this.hide;
  }

}