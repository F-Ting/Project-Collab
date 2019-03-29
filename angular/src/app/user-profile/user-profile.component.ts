import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import {
    faLinkedin,
    faGithub,
    IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

const log = console.log;

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    public faLinkedin: IconDefinition = faLinkedin;
    public faGithub: IconDefinition = faGithub;
    public faEnvelope: IconDefinition = faEnvelope;
    private isOwner: boolean = false;
    private currentUsername = localStorage.getItem("username")
    public user: any;
    public projects: any[] = [];

    constructor(
        private userProfileService: UserProfileService,
        private route: ActivatedRoute,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.getUser(params.get("username"));
            this.getProjects(params.get("username"));
          })
    }

    private getUser(username) {
        this.userProfileService
            .getUser(username)
            .subscribe(user => {
                this.user = user;
                if(user.username == this.currentUsername){
                    this.isOwner = true;
                }
            }, error => log(error));
    }

    private getProjects(username) {
        this.userProfileService
            .getProjects(username)
            .subscribe(
                projects => (this.projects = projects),
                error => log(error)
            );
    }

    editProfile() {
        const dialogRef = this.dialog.open(EditUserProfileComponent, {
            width: '500px',
            data: this.user
        });
        dialogRef.afterClosed().subscribe(_ => this.ngOnInit());
    }
}
