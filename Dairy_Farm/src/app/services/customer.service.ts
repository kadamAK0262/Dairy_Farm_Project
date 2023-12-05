import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
export class updateData{
  id: any;
  checkDate: any;
  delivered: any;
  milkType: any;
  quantity: any;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'http://localhost:8081/api/addCostumer';
  // private getCustomerurl = 'http://localhost:8081/api/getCostumer';

  constructor(private http: HttpClient,private datePipe: DatePipe) {}

  customer(userData: any): Observable<any> {
    return this.http.post(this.customerUrl, userData).pipe(
      map((response: any) => {
        // Assuming the response contains user data
        return response;
      }),
      catchError(this.handleError)
    );
  }

  // getCustomers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.getCustomerurl);
  // }

   //get customer daily data by society id
   getDailycustomerbyid(societyId:any){
    return this.http.get(`http://localhost:8081/api/customersBySocietyId/${societyId}`)

   }

   getAllCustomerData(){
    return this.http.get(`http://localhost:8081/api/getCostumer`)
   }


   deleteCustomerById(id:any){
    return this.http.delete(`http://localhost:8081/api/deleteCustomer/${id}`)
   }


   // add list of data to daily customer table 
   saveDataList(dataList: any) {
    return this.http.post(`http://localhost:8081/dailyCustomers/addListOfDailyCustomer`,  dataList );
  }
   getDailyCustomerDataFromCustomerTable(){
    return this.http.get(`http://localhost:8081/dailyCustomers/addCustomerToDailyCustomer`)
   }


   updateDailyCustomer(id:any,customer:any){
    return this.http.put(`http://localhost:8081/dailyCustomers/${id}`,customer);
   }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  updateDilyCustomerByDateId(data:any){
   const id=data.id;
   const checkDate=data.date;
   const delivered=data.delivered;
   const milkType=data.milkType;
   const quantity=data.quantity;
    console.log(data,"ccccccccccccc");
    return this.http.put("http://localhost:8081/dailyCustomers/updateData",data)

  }

  historyofcustomer(customerId:any){
    return this.http.get(`http://localhost:8081/dailyCustomers/historyOfCustomer/${customerId}`);
  }
}
