import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private httpClient: HttpService) { }

  getForProject(projectId) {
    return this.httpClient.get('api/tags/project/' + projectId);
  }

  getForUser(username) {
    return this.httpClient.get('api/tags/user/' + username);
  }
  
  addToUser(username,data) {
    return this.httpClient.post('api/tags/user/' + username, data);
  }

  removeFromUser(username,data) {
    return this.httpClient.post('api/tags/user/' + username + "/remove" ,data);
  }

  addToProject(projectId, data) {
    return this.httpClient.post('api/tags/project/' + projectId, data);
  }

  removeFromProject(projectId, data) {
    return this.httpClient.post('api/tags/project/' + projectId + '/remove', data);
  }

}
