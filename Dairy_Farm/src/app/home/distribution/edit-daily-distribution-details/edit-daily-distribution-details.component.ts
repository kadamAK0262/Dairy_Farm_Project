import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

export class Update{
  id:any;
  date:any;
  delivered:any;
  milkType:any;
  quantity:any;
}
@Component({
  selector: 'app-edit-daily-distribution-details',
  templateUrl: './edit-daily-distribution-details.component.html',
  styleUrls: ['./edit-daily-distribution-details.component.css']
})
export class EditDailyDistributionDetailsComponent {
  [x: string]: any;
  editedData: any;
 

  constructor(private customerService:CustomerService,private fb: FormBuilder,private router : Router,
    private datePipe: DatePipe,public dialogRef: MatDialogRef<EditDailyDistributionDetailsComponent>
  ) {
    this.CustomerForm = this.fb.group({
      // id: ['', Validators.required],
      delivered: ['', Validators.required],
      milkType: ['', Validators.required],
      quantity: ['', Validators.required]
    });
   
  }
   currentDate = new Date();
  update:Update=new Update();
customer_id:any=sessionStorage.getItem("customer_id");
date:any=sessionStorage.getItem("todays_date");


  onSubmit(){
    console.log("asdafafafasfasfaf",this.customer_id);
    console.log("asdafafafasfasfaf",this.date);
    this.update.id=this.customer_id;

    this.onSaveClick();
    this.dialogRef.close();
    this.router.navigate(['/customer-table'])
  }
  // newEditedData:any;
  onSaveClick(): void {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.update.date=formattedDate;
    this.update.delivered=this.update.delivered;
    console.log("edited data ",this.editedData);
    this.customer_id=sessionStorage.getItem("customer_id");
    this.update.id=this.customer_id;
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",this.update);
    
   console.log("wertytrewqertewrtewrtewrtewrtewrtew",this.customer_id);
   
    this.customerService.updateDilyCustomerByDateId( this.update).subscribe(data=>{
   
     console.log("return data by updated service",this.editedData)
   

    })
    // Save the edited data and close the dialog
   
  }
CustomerForm:FormGroup;
  onCancelClick(): void {
    // Close the dialog without saving
   
  }

}
