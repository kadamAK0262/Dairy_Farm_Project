
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export class Customer{
  address:any;
  bill:any;
  checkDate:any;
  contactNo:any;
  customerName:any;
  delivered:any;
  emailId:any;
  idOfSociety:any;  
  milkType:any;
  status:any;
  timing:any;
  quantity:any;
  rate:any;

}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customerForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private customerService : CustomerService, private router : Router, private snackBar: MatSnackBar) {
    
    this.customerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      delivered: ['', Validators.required],
      checkDate: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emailId: ['', [Validators.required, Validators.email]],
      rate: ['', Validators.required],
      idOfSociety: ['', Validators.required],
      bill: ['', Validators.required],
      address: ['', Validators.required],
      milkType: ['', Validators.required],
      quantity: ['', [Validators.required]],
      status: ['', Validators.required],
      timing: ['', Validators.required]
    });
  }

  societies: any[] = [];
  ngOnInit(): void {
    this.customerService.getSocieties().subscribe(
      (response: any) => {
        this.societies = response; // Assign the response to the societies array
      },
      (error: any) => {
        console.error('Error fetching societies:', error);
      }
    )
  }

   customer:Customer=new Customer();

  onSubmit() {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
      console.log("Invalid");
      // this.success = false;
    }

    this.customer = this.customerForm.value;
    // Submit the form data to your service
    this.customerService.customer(this.customer)
      .subscribe(
        response => {
          this.success = true;
          console.log('Form submitted successfully. Response:', response);
           this.router.navigate(['/dashboard']);
           this.snackBar.open('Form submitted successfully!', 'Close', {
            duration: 3000, // Duration in milliseconds
          });
        },
        error => {
          console.error('Form submission error:', error);
        }
      );
  }

  hasError(controlName: string, errorName: string) {
    return this.customerForm.get(controlName)!.hasError(errorName) && this.customerForm.get(controlName)!.touched;
  }

}



