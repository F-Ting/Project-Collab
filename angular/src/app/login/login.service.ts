import { Injectable } from '@angular/core';
import { HttpService} from '../http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private subject = new Subject<any>();
    constructor(private httpClient: HttpService) { }

    login(data) {
      // login
      return this.httpClient.post(`api/user/login/`, data);
    }
    setLoginStatus(status: boolean) {
      this.subject.next({ status });
    }
    getLoginStatus(): Observable<any> {
      return this.subject.asObservable();
    }
}
