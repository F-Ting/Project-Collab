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

    project: any;
    user: any;

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

    ngOnInit() {
        this.projectId = this.route.snapshot.paramMap.get("id");
        this.username = localStorage.getItem("username");

        this.projectService.getProject(this.projectId).subscribe( (response) => {
            this.project = response;
            console.warn(response)
            this.userService.getUser(this.project.owner.username).subscribe((response) => {
                this.user = response;
            });
        });


    }
}
