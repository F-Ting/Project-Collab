import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Project } from "../models/project";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

    projects: Array<Project> = [];

    /** TODO: Service to load and initialize projects from the DB */
    ngOnInit() {
      this.projects;/** = [
        {
          _id: 1,
          title: "WoofWoof",
          description: "Dog meet-up application!",
          owner: "Matthew Wong",
          img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
        },
        {
          _id: 2,
          title: "ShowTime",
          description: "Community Sourced TV Guide",
          owner: "Sohail Hameed",
          img: "https://i.imgur.com/kWrq84r.jpg"
        }
      ];**/
    }

}
