import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../http.service';
import { Project } from '../models/project';
import { User } from '../models/user';

const GET_USERS_URL = 'api/users';
const GET_PROJECTS_URL = 'api/projects?withTags=True';
const GET_RECOMMENDED_TAGS_URL = 'api/tags/recommend';

@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private httpClient: HttpService) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get(GET_USERS_URL) as Observable<User[]>;
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get(GET_PROJECTS_URL) as Observable<Project[]>;
  }

  getRecommendedTags(): Observable<string[]> {
    return this.httpClient.get(GET_RECOMMENDED_TAGS_URL) as Observable<string[]>;
  }
}
