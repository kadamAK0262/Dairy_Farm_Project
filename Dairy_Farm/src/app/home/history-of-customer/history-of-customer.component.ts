import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-history-of-customer',
  templateUrl: './history-of-customer.component.html',
  styleUrls: ['./history-of-customer.component.css']
})
export class HistoryOfCustomerComponent implements AfterViewInit{

  @ViewChild(MatSort)
  sort!: MatSort;

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
      'status',
      'timing',
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

  pageSize = 5; // Set your desired page size
  pageIndex = 0; // Set the initial page index

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngAfterViewInit(): void {
    // Connect the sorting with the data source
    this.historylist.sort = this.sort;
  }
}
