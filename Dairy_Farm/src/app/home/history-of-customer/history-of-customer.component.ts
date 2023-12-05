import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-history-of-customer',
  templateUrl: './history-of-customer.component.html',
  styleUrls: ['./history-of-customer.component.css']
})
export class HistoryOfCustomerComponent {

  constructor(private customerservice:CustomerService){
    this.getCustomerhistory();
  }

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
  'rate'
 
  ];
  
  historylist:any
  
   customerId= sessionStorage.getItem("customer_id")

    

      // Or, convert the value to a number using Number()
       numberValue = Number(this.customerId);
  
  
  getCustomerhistory(){
    console.log("customer id: ",this.customerId);
    console.log(typeof(this.customerId))
    

    this.customerservice.historyofcustomer(sessionStorage.getItem("customer_id")).subscribe(data=>{
      this.historylist=data;
      console.log(this.historylist);
      
    })
  }

}
