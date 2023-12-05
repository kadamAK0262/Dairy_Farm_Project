import { MatDialog } from '@angular/material/dialog';
import { UpdatecustomerPopupComponent } from '../updatecustomer-popup/updatecustomer-popup.component';
import { DeletecustomerPopupComponent } from './../deletecustomer-popup/deletecustomer-popup.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';





export interface PeriodicElement {
  position: number;
  name: string;
  contact: number;
  address: string;
  history : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad', history:'dbdcbjbs' },
  { position: 2, name: 'Minal', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 3, name: 'Om', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 4, name: 'AAkash', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 5, name: 'sriram', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 6, name: 'AKshay', contact: 87964546546, address: 'Raigad' ,history:'dbdcbjbs'},
  { position: 7, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 8, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 9, name: 'AKshay', contact: 87964546546, address: 'Raigad', history:'dbdcbjbs'},
  { position: 10, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 11, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 12, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 13, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 14, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 15, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  { position: 16, name: 'AKshay', contact: 87964546546, address: 'Raigad',history:'dbdcbjbs' },
  
];




@Component({
  selector: 'app-daily-customers',
  templateUrl: './daily-customers.component.html',
  styleUrls: ['./daily-customers.component.css']
})
export class DailyCustomersComponent implements OnInit{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','history','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private MatDialog:MatDialog){}
  ngOnInit(): void {
    console.log(sessionStorage.getItem("society_id"));
    throw new Error('Method not implemented.');
  }

   openDialog(){
    this.MatDialog.open(UpdatecustomerPopupComponent,{
      width:'600px',
    })
   }
   deleteDialog(){
    this.MatDialog.open(DeletecustomerPopupComponent,{
      width:'400px'
    })
   }
   

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
