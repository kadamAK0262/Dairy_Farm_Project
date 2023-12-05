import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesSericeService {

  constructor(private http: HttpClient) { }

  getSalesDataForSale(milkType:any){
    return  this.http.get(`http://localhost:8081/api/cow/${milkType}`)
  }

  getSalesDataQuartely(milkType:any){
    return this.http.get(`http://localhost:8081/api/cow/quarterly/${milkType}`)
  }
 
}
