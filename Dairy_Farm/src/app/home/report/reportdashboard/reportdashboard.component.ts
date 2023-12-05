import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportdashboard',
  templateUrl: './reportdashboard.component.html',
  styleUrls: ['./reportdashboard.component.css']
})
export class ReportdashboardComponent {
  constructor(private router : Router ){}

  goToCustomerDetailsTable(){
    this.router.navigate(["/customerDetails"])

  }
  getSalesPage(){
    this.router.navigate(["/salesReport"])
  }

}
