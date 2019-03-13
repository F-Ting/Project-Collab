import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { DiscoverService } from './discover.service';

const log = console.log;

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  error = false;
  //   projects: Array<Project> = [];
  projects: Array<any> = [];
  user_id = localStorage.getItem('user_id');

  constructor(private discoverService: DiscoverService) {}

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

  onSearch(searchProjects: string[]) {
    log(searchProjects);
    this.discoverService.getProjectsBySearch(searchProjects).subscribe(
      (response: any[]) => {
        log(response);
        this.projects = response;
      },
      (err: any) => {
        log('Error searching for projects: ', err);
      }
    );
  }
}
