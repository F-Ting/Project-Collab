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

}
