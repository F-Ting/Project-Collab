import { Component, OnInit } from "@angular/core";
import { DiscoverService } from "./discover.service";
import { Router } from '@angular/router';

const log = console.log;

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.css"]
})
export class DiscoverComponent implements OnInit {
  error: boolean = false;
  projects: Array<any> = [];
  user_id = localStorage.getItem("user_id");
  username = localStorage.getItem("username");

  constructor(private discoverService: DiscoverService, private router: Router) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.discoverService.getProjectsWithTags().subscribe(
      (response: Array<any>) => {
        this.projects = response;
      },
      error => {
        this.error = true;
      }
    );
  }

  onSearch(searchProjects: string[]) {
    this.discoverService.getProjectsBySearch(searchProjects).subscribe(
      (response: any[]) => {
        this.projects = response;
      },
      (err: any) => {
        log('Error searching for projects: ', err);
      }
    );
  }
}
