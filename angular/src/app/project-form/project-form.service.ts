import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(private httpClient: HttpService) { }

  create(data) {
    return this.httpClient.post('api/project', data);
  }

}
