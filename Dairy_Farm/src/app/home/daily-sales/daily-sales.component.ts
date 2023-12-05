import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DailySalesPopupComponent } from '../daily-sales-popup/daily-sales-popup.component';


export interface PeriodicElement {
  position: number;
  name: string;
  contact: number;
  address: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  { position: 1, name: 'AKshay', contact: 87964546546, address: 'Raigad' },
  
];

@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.css']
})
export class DailySalesComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private MatDialog:MatDialog){}

   openDialog(){
    this.MatDialog.open(DailySalesPopupComponent,{
      width:'600px',
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
