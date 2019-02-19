import { Injectable } from '@angular/core';
import { HttpService} from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    login(data) {
      // login
      return this.httpClient.post(`/api/user/login/`, data);
    }
}
