import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserProfileService {

  constructor(private httpClient: HttpService) { }

  public saveUser(user): Observable<any> {
    return this.httpClient.post(
      'api/user/update', user
    );
  }

  public saveTags(username,tags): Observable<any> {
    return this.httpClient.post(
      'api/tags/user/'+ username, {tags: tags}
    );
  }
  public removeTags(username,tags): Observable<any> {
    return this.httpClient.post(
      'api/tags/user/'+ username + "/remove", {tags: tags}
    );
  }
}
