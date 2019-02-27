import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpService) { }

  getUsers() {
      return this.httpClient.get(`api/users/SergeyBrin`)
  }

}
