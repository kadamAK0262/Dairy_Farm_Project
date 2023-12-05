import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerComponent } from '../customer/customer.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UpdatecustomerPopupComponent } from '../distribution/updatecustomer-popup/updatecustomer-popup.component';
import { EditDailyDistributionDetailsComponent } from '../distribution/edit-daily-distribution-details/edit-daily-distribution-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export interface Customer{
  id:any,
  address:any;
  bill:any;
  checkDate:any;
  contactNo:any;
  customerName:any;
  delivered:any;
  emailId:any;
  idOfSociety:any;
  milkType:any;
  outStandingBill:any;
  quantity:any;
  rate:any;
  action:any
}
@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent  {
  [x: string]: any;

  customers: any[] = [];
  editForm: FormGroup;
  constructor(private router : Router ,private MatDialog: MatDialog,private fb: FormBuilder,private customerService: CustomerService,private matDialog: MatDialog) {
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      milkType: ['', Validators.required],
      // Add other form controls for other editable columns
    });

  }

  displayedColumns: string[] = [
    'id',
    'address',
    //  'bill',
    //  'checkDate',
     'contactNo',
  'customerName',
  // 'delivered',
  'emailId',
  'idOfSociety',
  // 'milkType',
      // 'outStandingBill',
  //  'quantity',
  'rate',
  'updatedStatus',
  'action'
 
  ];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  updatedStausInClore=false;
  
  ngOnInit() {
    this.getDailyCustomerData();
    this.saveDataToBackend();
   
  }


  customerList:any;
getDailyCustomerData(){
  sessionStorage.getItem("society_id")
  // Fetch customer data when the component initializes
  this.customerService.getDailycustomerbyid(sessionStorage.getItem("society_id")).subscribe(response =>{
   this.customerList=response;
   console.log(sessionStorage.getItem("society_id"));
   console.log("customer list is ",this.customerList);
   
  },
  (error) => {
    console.error("Error fetching customer data:", error);
  }
)
}

updatedCustomerList:any;
addToCustomerList(rowData: any) {
  // Add the selected row data to the customerList
  if (!this.updatedCustomerList) {
    this.updatedCustomerList = [];
  }
  rowData.updatedStatus=true;

  this.updatedCustomerList.push(rowData);
  this.saveDataToBackend();
  console.log("data added to list which we created in ts ",rowData)
}

    saveDataToBackend() {
      const dataListToSend = this.dataSource.data;
      console.log("data list to send in back end",this.customerList);
      for(const dataEntry of this.updatedCustomerList){
        this.customerService.saveDataList(dataEntry).subscribe(data=>{
          console.log(`Data entry ${dataEntry.id} updated successfully:`, data);
      
      })
    }
    
  }

  customer_id:any;
  editDailyCustomer(id: any,date:any) {

   sessionStorage.setItem("customer_id",id);
   sessionStorage.setItem("todays_date",date);
  
   
    const editedData = this.editForm.value
    console.log("edieted data new data by aakash",editedData)
    
    
    // Open the edit dialog and pass the rowData to it
    this.MatDialog.open(EditDailyDistributionDetailsComponent)
    width: '800px'
   


    // dialogRef.afterClosed().subscribe((updatedData) => {
    //   if (updatedData) {
    //     // Update the MatTable and the list with the edited data
    //     const index = this.customerList.findIndex((item: { id: any; }) => item.id === rowData.id);
    //     if (index !== -1) {
    //       this.customerList[index] = updatedData;
    //       this.table.renderRows();
    //     }
    //   }
    // });
  }

  getCustomrId(customerId:any){
    sessionStorage.setItem("customer_id",customerId);
    this.router.navigate(['/history'])


  }

  

 
}