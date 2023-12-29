import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { UpdateCustomerdetailsComponent } from '../update-customerdetails/update-customerdetails.component';
import { DeleteCustomerDialogComponent } from '../delete-customer-dialog/delete-customer-dialog.component';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  customers: any[] = [];
  dialog: any;

  constructor(private customerService: CustomerService,private matDialog:MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'address',
     'bill',
     'checkDate',
     'contactNo',
  'customerName',
  'delivered',
  'emailId',
  'idOfSociety',
  'milkType',
      'status',
      'timing',
   'quantity',
  'rate',
  'action'
  ];
  customerList:any;
  id:any;
  ngOnInit() {
   this.getAllustomers()
    
    this.deleteCustomer(this.id);
  }

 
 
  getAllustomers(){
    this.customerService.getAllCustomerData().subscribe(data=> {
     this.customerList=data
     console.log("8888888888888888",this.customerList);
     
    })
  }
  deleteCustomer(id:any){
    this.customerService.deleteCustomerById(id).subscribe(data=>{   
    console.log("deleted",id)
    })

  }


  openEditDialog(customer: any): void {
    const dialogRef = this.matDialog.open(UpdateCustomerdetailsComponent, {
      width: '100%', // Adjust the width as per your design
      data: { customer: customer }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // The form was successfully submitted, you can update your table or perform other actions
        console.log('Dialog closed with result:', result);
        // Update your table or perform other actions
      } else {
        // The user closed the dialog without submitting the form
        console.log('Dialog closed without changes');
      }
    });
  }


  openConfirmationDialog(customerId: number): void {
    const dialogRef = this.matDialog.open(DeleteCustomerDialogComponent, {
      width: '300px', // Adjust the width as per your design
      data: { message: 'Are you sure you want to delete this customer?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked 'Yes,' proceed with deletion
        this.deleteCustomer(customerId);
      } else {
        // User clicked 'Cancel,' do nothing
      }
    });
  }

}


  // editCustomer(customer: any) {
  //   const dialogRef = this.matDialog.open(UpdateCustomerdetailsComponent, {
  //     width: '400px',
  //     data: { customer: { ...customer } } // Pass a copy of the customer object to avoid modifying the original data
  //   });

  //   dialogRef.afterClosed().subscribe(updatedCustomer => {
  //     if (updatedCustomer) {
  //       // Call the update API with the updated customer details
  //       this.customerService.updateCustomerDetails(updatedCustomer.id, updatedCustomer).subscribe(updatedData => {
  //         // Handle success (you can update the customerList array or reload the data)
  //         console.log('Customer updated successfully:', updatedData);
  //       });
  //     }
  //   });
  // }
  
  // addCustomer(){
  //     this.matDialog.open(CustomerComponent)
  //     width: '100%'
  // }




  // this.getDataBySocietyId()

  // getDataBySocietyId(){
  //   sessionStorage.getItem("society_id")
  //   // Fetch customer data when the component initializes
  //   this.customerService.getAllCustomerData().subscribe(response=>{
  //    this.customerList=response;
  //    console.log("customer list is ",this.customerList);
     
  //   })

  // }

