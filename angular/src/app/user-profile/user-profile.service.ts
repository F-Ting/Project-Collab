import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient: HttpService) { }

  getUser(): Observable<any> {
    return this.httpClient.get(`api/users/${localStorage.getItem('username')}`);
  }

  getProjects(): Observable<any> {
    return this.httpClient.post(`api/user_associations/user`, {user: localStorage.getItem('user_id')});
  }
}
