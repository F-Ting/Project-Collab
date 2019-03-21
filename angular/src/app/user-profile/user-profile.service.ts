import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    constructor(private httpClient: HttpService) {}

    getUser(username): Observable<any> {
        return this.httpClient.get(
            `api/users/${username}`
        );
    }

    getProjects(username): Observable<any> {
        return this.httpClient.get(
            `api/user_associations/user/${username}`
        );
    }
}
