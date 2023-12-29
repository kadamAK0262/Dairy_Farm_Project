import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UpdateSocietyPopupComponent } from '../update-society-popup/update-society-popup.component';

import { SocietyformComponent } from '../societyform/societyform.component';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { DeleteSocietyDialogComponent } from '../delete-society-dialog/delete-society-dialog.component';

export interface Society {
  id: number;
  societyName: string;
  societyId: number;
  totalActiveCustomers: number;
  Action:any;
}

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  societyData: any[] = []; // This array will store form data

  constructor(private MatDialog: MatDialog,private singupservice:SignupService ,private router : Router) { }

  ngOnInit(): void {
    this.getSociety();
  
  }

  displayedColumns: string[] = [
    'id',
    'societyName',
    'societyId',
    'totalActiveCustomers',
    'action'
  ];
  updateSociety(){
    this.MatDialog.open(UpdateSocietyPopupComponent)
    width:'600px'

  }



  addSociety(){
    this.MatDialog.open(SocietyformComponent)
    width: '800px'
  }


  Societydata:any;
  getSociety(){
    this.singupservice.SocietyData().subscribe((response )=>{
      this.Societydata=(response);
      console.log("hasdhadhkahdskhakhdkhdskj"+JSON.stringify(this.Societydata));
    })
  }
  deletesociety(id:any){
    this.singupservice.DeleteSociety(id).subscribe(data=>{
      console.log("society deleted with id",id)
    }
    )
  }

  getSocietId(SocietyId:any){
    sessionStorage.setItem("society_id",SocietyId);
    this.router.navigate(['/customer-table'])
     console.log(SocietyId);
  }

  openConfirmationDialog(societyId: number): void {
    const dialogRef = this.MatDialog.open(DeleteSocietyDialogComponent, {
      width: '300px', // Adjust the width as per your design
      data: { message: 'Are you sure you want to delete this Society?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked 'Yes,' proceed with deletion
        this.deletesociety(societyId);
      } else {
        // User clicked 'Cancel,' do nothing
      }
    });
  }
  

}
