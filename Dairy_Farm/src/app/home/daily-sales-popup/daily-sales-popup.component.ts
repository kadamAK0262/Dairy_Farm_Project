import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


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
  selector: 'app-daily-sales-popup',
  templateUrl: './daily-sales-popup.component.html',
  styleUrls: ['./daily-sales-popup.component.css']
})
export class DailySalesPopupComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
