import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ProjectService } from "./project.service";
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { UserProfileService } from '../user-profile/user-profile.service';

@Component({
    selector: "app-project",
    templateUrl: "./project.component.html",
    styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
    projectId: string;
    username: string;
    github: string;
    project: any;
    user: any;
    associated_users: any;
    breakpoint: number;

    faGithub: IconDefinition = faGithub;
    faEnvelope: IconDefinition = faEnvelope;
    faLink: IconDefinition = faLink;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        private projectService: ProjectService,
        private userService: UserProfileService
    ) {}

    onEdit(project) {
      localStorage.setItem("project", JSON.stringify(project));
      this.router.navigate(['/create']);
    }

    onResize(event) {
      this.breakpoint = (window.innerWidth >= 600) ? 4: 2;
    }

    ngOnInit() {
      this.projectId = this.route.snapshot.paramMap.get("id");
      this.username = localStorage.getItem("username");
      this.breakpoint = (window.innerWidth >= 600) ? 4: 2;
      this.projectService.getProject(this.projectId).subscribe((response) => {
            this.project = response;
            if (this.project.github) {
              this.github = this.project.github.replace("https://github.com/", "");
            }

            this.userService.getUser(this.project.owner.username).subscribe((response) => {
                this.user = response;
            });

            this.projectService.getUsers(this.project.id).subscribe((response) => {
                this.associated_users = response;
            });
        });
    }
}
