import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  project = new Project(1, 'Kelly', 'Basic', 'kelly@utoronto.ca', 'github.com', 'kelly')
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() {
    console.log(this.project);
  }

  ngOnInit() {
  }

}
