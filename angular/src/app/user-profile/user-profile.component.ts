import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import {
    faLinkedin,
    faGithub,
    IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

    public user: any;
    public projects: any[] = [];

    constructor(private userProfileService: UserProfileService) {}

    ngOnInit(): void {
        this.getUser();
        this.getProjects();
    }

    private getUser() {
        this.userProfileService
            .getUser()
            .subscribe(user => (this.user = user), error => log(error));
    }

    private getProjects() {
        this.userProfileService
            .getProjects()
            .subscribe(
                projects => (this.projects = projects),
                error => log(error)
            );
    }
}
