import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private httpClient: HttpService) { }

  getProjects() {
    return this.httpClient.get(`api/projects`);
  }

  getProjectsWithTags() {
    return this.httpClient.get(`api/projects?withTags=True`);
  }

  getProjectsBySearch(projects: string[]) {
    return this.httpClient.post('api/projects/search', {
      searchByProject: projects
    });
  }
}
