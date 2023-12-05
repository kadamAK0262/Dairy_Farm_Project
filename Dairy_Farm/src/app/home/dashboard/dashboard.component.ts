import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router : Router ,private customerService: CustomerService){}
  getDistrubutionPage(){
    this.router.navigate(['/society'])
  }

  getReportPage(){
    this.router.navigate(['/report'])
  }
  getDistrubutionDataToTable(){
    this.customerService.getDailyCustomerDataFromCustomerTable().subscribe(data=>{
      console.log("data added to customer table")
    })
  }

  getCustomerPage(){
    this.router.navigate(['/customer-form'])
  }

  getlandingPage(){
    this.router.navigate([''])
  }
}
