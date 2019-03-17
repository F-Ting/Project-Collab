import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Object = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectProject(project){
    this.router.navigate([`/project/${project.id}`]);
  }
}
