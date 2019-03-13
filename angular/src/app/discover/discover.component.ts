import { Component, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { DiscoverService } from "./discover.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.css"]
})
export class DiscoverComponent implements OnInit {
    error: boolean = false;
    //   projects: Array<Project> = [];
    projects: Array<any> = [];
    user_id = localStorage.getItem("user_id");
    username = localStorage.getItem("username");

    constructor(private discoverService: DiscoverService, private router: Router) {}

    ngOnInit() {
      this.getProjects();
    }

    getProjects() {
      console.log(this.user_id);
      this.discoverService.getProjects().subscribe(
          (response: Array<any>) => {
          this.projects = response;
          },
          error => {
          this.error = true;
          }
      );
    }

    onEdit(project) {
      console.log(project);
      localStorage.setItem("project", JSON.stringify(project));
      this.router.navigate(['/create']);
    }
}
