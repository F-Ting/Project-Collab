import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpService) { }

    login(data) {
      // login
      return this.httpClient.post(`api/user/login/`, data);
    }
}
