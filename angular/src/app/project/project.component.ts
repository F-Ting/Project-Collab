import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ProjectService } from "./project.service";

@Component({
    selector: "app-project",
    templateUrl: "./project.component.html",
    styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
    projectId: string;

    project: any;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        private projectService: ProjectService
    ) {}

    ngOnInit() {
        this.projectId = this.route.snapshot.paramMap.get("id");

        this.projectService.getProject(this.projectId).subscribe( (response) => {
            this.project = response;
            console.log(this.project.owner.username)
        });

        



    }
}
