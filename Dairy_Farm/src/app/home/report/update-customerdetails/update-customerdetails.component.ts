import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customerdetails',
  templateUrl: './update-customerdetails.component.html',
  styleUrls: ['./update-customerdetails.component.css']
})



export class UpdateCustomerdetailsComponent {

  // customers: any[] = [];
  customerForm: FormGroup; // Add FormGroup for the customer form
  success = false;
  submitted = false;
  matDialog: any;

  constructor(
    private customerService: CustomerService,
    // private formBuilder: FormBuilder 
    public dialogRef: MatDialogRef<UpdateCustomerdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
   

    this.customerForm = this.formBuilder.group({
      customerName: [data.customer.customerName, Validators.required],
      contactNo: [data.customer.contactNo, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emailId: [data.customer.emailId, Validators.required],
      address: [data.customer.address, Validators.required],
      checkDate: [data.customer.checkDate, Validators.required],
      rate: [data.customer.rate, Validators.required],
      quantity: [data.customer.quantity, Validators.required],
      bill: [data.customer.bill],
      idOfSociety: [data.customer.idOfSociety, Validators.required],
      milkType: [data.customer.milkType],
      delivered: [data.customer.delivered],
      status: [data.customer.status],
      timing: [data.customer.timing]
    });
  }

  id: any;
  societies: any[] = [];
  ngOnInit() {
    
      this.customerService.getSocieties().subscribe(
        (response: any) => {
          this.societies = response; // Assign the response to the societies array
        },
        (error: any) => {
          console.error('Error fetching societies:', error);
        }
      )
    
  }

  
  hasError(controlName: string, errorName: string) {
    return this.customerForm.controls[controlName].hasError(errorName);
  }



 
  saveChanges() {
    const updatedCustomer = { ...this.customerForm.value, id: this.data.customer.id };
    
    // Call the update API here
    this.customerService.updateCustomerDetails(updatedCustomer.id, updatedCustomer).subscribe(
      (updatedData) => {
        console.log('Customer updated successfully:', updatedData);
        this.dialogRef.close(updatedCustomer); // Close the dialog on success
      },
      (error) => {
        console.error('Error updating customer:', error);
        // Handle error or show a notification to the user
      }
    );
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
  // Function to handle form submission
  // onSubmit() {
  //   this.submitted = true;

  //   if (this.customerForm.invalid) {
  //     return;
  //   }

   
  //   const formData = this.customerForm.value;
  //   console.log('Form Data:', formData);

    
  //   this.customerForm.reset();
  //   this.success = true;
  // }

















  // updatedCustomer: any;

  // constructor(public dialogRef: MatDialogRef<UpdateCustomerdetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  //   this.updatedCustomer = { ...data.customer };
  // }

  // saveChanges() {
  //   this.dialogRef.close(this.updatedCustomer);
  // }

  // closeDialog() {
  //   this.dialogRef.close();
  // }











  // customerForm: FormGroup;
  // submitted = false;
  // success = false;
  // id: any;

  // constructor(private formBuilder: FormBuilder, private customerService : CustomerService, private router : Router, private snackBar: MatSnackBar) {
    
  //   this.customerForm = this.formBuilder.group({
  //     customerName: ['', Validators.required],
  //     delivered: ['', Validators.required],
  //     checkDate: ['', Validators.required],
  //     contactNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
  //     emailId: ['', [Validators.required, Validators.email]],
  //     rate: ['', Validators.required],
  //     idOfSociety: ['', Validators.required],
  //     bill: ['', Validators.required],
  //     address: ['', Validators.required],
  //     milkType: ['', Validators.required],
  //     quantity: ['', [Validators.required]],
  //     status: ['', Validators.required],
  //     timing: ['', Validators.required]
  //   });
  // }

  // societies: any[] = [];
  // ngOnInit(): void {
  //   this.customerService.getSocieties().subscribe(
  //     (response: any) => {
  //       this.societies = response; // Assign the response to the societies array
  //     },
  //     (error: any) => {
  //       console.error('Error fetching societies:', error);
  //     }
  //   )
  // }

  //  customer:Customer=new Customer();

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.customerForm.invalid) {
  //     return;
  //     console.log("Invalid");
  //     this.success = false;
      
  //   }

  //   this.customer = this.customerForm.value;
  //   this.id = this.customerForm.value;
  //   // Submit the form data to your service
  //   this.customerService.updateCustomerDetails(this.customer, this.id)
  //     .subscribe(
  //       response => {
  //         this.success = true;
  //         console.log('Form submitted successfully. Response:', response);
  //          this.router.navigate(['/customerDetails']);
  //          this.snackBar.open('Form submitted successfully!', 'Close', {
  //           duration: 3000, // Duration in milliseconds
  //         });
  //       },
  //       error => {
  //         console.error('Form submission error:', error);
  //       }
  //     );
  // }

  // hasError(controlName: string, errorName: string) {
  //   return this.customerForm.get(controlName)!.hasError(errorName) && this.customerForm.get(controlName)!.touched;
  // }



