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
    username: string;

    project: any;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        private projectService: ProjectService
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
        });
    }
}
