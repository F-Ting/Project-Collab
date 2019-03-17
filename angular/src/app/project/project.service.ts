import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
    providedIn: "root"
})
export class ProjectService {
    constructor(private httpClient: HttpService) {}

      getProject(projectId) {
          return this.httpClient.get(`api/project/${projectId}`)
      }
}
