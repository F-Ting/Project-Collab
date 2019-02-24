import { Component, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { DiscoverService } from "./discover.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.css"]
})
export class DiscoverComponent implements OnInit {
    error: boolean = false;
    //   projects: Array<Project> = [];
    projects: Array<any> = [];

    constructor(private discoverService: DiscoverService) {}

    ngOnInit() {
    this.getProjects();
    }

    getProjects() {
    this.discoverService.getProjects().subscribe(
        (response: Array<any>) => {
        this.projects = response;
        },
        error => {
        this.error = true;
        }
    );
    }
}
