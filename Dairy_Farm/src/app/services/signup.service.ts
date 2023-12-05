import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupUrl = 'http://localhost:8081/api/users/signup';

  constructor(private http: HttpClient) {}

  signUp(userData: any): Observable<any> {
    return this.http.post(this.signupUrl, userData).pipe(
      map((response: any) => {
        // Assuming the response contains user data
        return response;
      }),
      catchError(this.handleError)
    );
  }
  
  // get society data
  SocietyData(){
    return this.http.get("http://localhost:8081/api/getSocieties");
  }

  // add society 
  addSociety(Society:any){
    return this.http.post("http://localhost:8081/api/addSociety",Society) 
   }

   DeleteSociety(id:any){
    return this.http.delete(`http://localhost:8081/api/deleteSociety/${id}`)
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

}


// private signupUrl = 'http://localhost:8081/api/users/signup';

  // constructor(private http: HttpClient) { }

  // signUp(userData: any): Observable<any> {
  //   return this.http.post(this.signupUrl, userData).pipe(
  //     map((response: any) => {
  //       // Assuming the response contains user data
  //       return response;
  //     })
  //   );

  // }