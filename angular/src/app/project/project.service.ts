import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
    providedIn: "root"
})
export class ProjectService {
    constructor(private httpClient: HttpService) {}

      getProject(projectId) {
          return this.httpClient.get(`api/project/${projectId}?withTags=true`)
      }

    getUsers(projectId) {
        return this.httpClient.get(`api/user_associations/project/${projectId}`);
      }
}
