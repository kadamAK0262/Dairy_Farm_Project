import { Injectable } from '@angular/core';
import * as Msal from 'msal';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private readonly msalConfig = {
    auth: {
      clientId: '6b9a6de2-f2fb-4525-91eb-6929a872db3f',
      authority: 'https://login.microsoftonline.com/2821b6a7-e528-4079-9079-2feea853cf13',
    }
  };

  private readonly msalInstance = new Msal.UserAgentApplication(this.msalConfig);

  login(): Promise<string> {
    return this.msalInstance.loginPopup()
      .then((loginResponse: Msal.AuthResponse) => {
        return loginResponse.accessToken;
      })
      .catch((error) => {
        console.error('Authentication failed', error);
        throw error;
      });
  }
}
