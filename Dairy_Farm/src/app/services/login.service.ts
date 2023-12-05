import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8081/api/users/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const loginRequest = { email, password };
    return this.http.post<string>(`${this.apiUrl}`, loginRequest);
  }
}
