

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing/main/main.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './landing/index/index.component';
import { SignupComponent } from './signup/signup.component';

import { DailySalesComponent } from './home/daily-sales/daily-sales.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { CustomerTableComponent } from './home/customer-table/customer-table.component';
import { CustomerComponent } from './home/customer/customer.component';
import { SocietyComponent } from './home/distribution/society/society.component';
import { ReportdashboardComponent } from './home/report/reportdashboard/reportdashboard.component';
import { CustomerdetailsComponent } from './home/report/customerdetails/customerdetails.component';
import { SalesreportComponent } from './home/report/salesreport/salesreport.component';
import { PowerBiReportComponent } from './home/report/power-bi-report/power-bi-report.component';
import { HistoryOfCustomerComponent } from './home/history-of-customer/history-of-customer.component';
import { UpdateCustomerdetailsComponent } from './home/report/update-customerdetails/update-customerdetails.component';
import { BillsComponent } from './home/bills/bills.component';


const routes: Routes = [
  
  {
    path :'', component : IndexComponent
  },
  {
    path :'main', component:MainComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'signup', component : SignupComponent 
  },
  
  {
    path : 'customer-form', component : CustomerComponent
  },

  // {
  //   path : 'signup', component :SignupComponent
  // },
  
  // {
  //   path:'index', component : IndexComponent
  // },
  // { path: '', redirectTo: '/index', pathMatch: 'full' }

  {
    path: 'index', component : IndexComponent

  },
  {
    path : 'dashboard', component : DashboardComponent
  },
  {
    path : 'customer-table', component : CustomerTableComponent
  },
  {
    path : 'society', component :SocietyComponent
  },
  
  {
    path : 'report', component :ReportdashboardComponent
  },
  {
    path : 'customerDetails', component :CustomerdetailsComponent
  },
  {
    path : 'updateCustomer',  component : UpdateCustomerdetailsComponent
  },
  {
    path : 'salesReport', component :SalesreportComponent
  },

  { path: 'powerbi-report', component: PowerBiReportComponent }
,

{ path: 'history', component: HistoryOfCustomerComponent },

{
  path: 'billing/:id', component: BillsComponent
}
  // {
  //   path : 'dashboard', children:[
  //     {
         
  //     }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
