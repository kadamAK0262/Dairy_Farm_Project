import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UpdateSocietyPopupComponent } from '../update-society-popup/update-society-popup.component';
import { DeleteSocietyPopupComponent } from '../delete-society-popup/delete-society-popup.component';
import { SocietyformComponent } from '../societyform/societyform.component';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

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
    // Initialize or load your form data here
    // Example:
    this.societyData = [
      {
        id: 1,
        societyId: 'ABC123',
        societyName: 'Example Society 1',
        activeCustomersCount: 50
      },
      {
        id: 2,
        societyId: 'DEF456',
        societyName: 'Example Society 2',
        activeCustomersCount: 30
      }
      // Add more data as needed
    ];
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

  deleteSociety(){
    this.MatDialog.open(DeleteSocietyPopupComponent)
    width:'400px'
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

}
