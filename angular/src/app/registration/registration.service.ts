import { Injectable } from '@angular/core';
import { HttpService} from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    constructor(private httpClient: HttpService) { }

    registration(data, type) {
      // registration
      return this.httpClient.post(`api/users/${type}`, data);
    }
}
