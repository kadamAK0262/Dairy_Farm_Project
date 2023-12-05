import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  customers: any[] = [];

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
      'outStandingBill',
   'quantity',
  'rate',
  'action'
  ];
  customerList:any;
  id:any;
  ngOnInit() {
   this.getAllustomers()
    // this.getDataBySocietyId()
    this.deleteCustomer(this.id);
  }

  // getDataBySocietyId(){
  //   sessionStorage.getItem("society_id")
  //   // Fetch customer data when the component initializes
  //   this.customerService.getAllCustomerData().subscribe(response=>{
  //    this.customerList=response;
  //    console.log("customer list is ",this.customerList);
     
  //   })

  // }
 
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

  // addCustomer(){
  //     this.matDialog.open(CustomerComponent)
  //     width: '100%'
  // }


}