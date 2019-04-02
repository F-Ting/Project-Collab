import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserProfileService } from '../user-profile.service';
import { ActivatedRoute } from '@angular/router';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const log = console.log;

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    public faLinkedin: IconDefinition = faLinkedin;
    public faGithub: IconDefinition = faGithub;
    public faEnvelope: IconDefinition = faEnvelope;
    public isOwner = false;
    private currentUsername = localStorage.getItem('username');
    public tags: any[] = [];
    public user: any;

    constructor(
        public dialog: MatDialog,
        private userProfileService: UserProfileService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.getUser(params.get('username'));
            this.getTags(params.get('username'));
        });
    }
    private getTags(username) {
        this.userProfileService.getTags(username).subscribe(
            tags => {
                this.tags = tags;
            },
            error => log(error)
        );
    }
    private getUser(username) {
        this.userProfileService.getUser(username).subscribe(
            user => {
                this.user = user;
                if (user.username == this.currentUsername) {
                    this.isOwner = true;
                }
            },
            error => log(error)
        );
    }

    editProfile() {
        const dialogRef = this.dialog.open(EditUserProfileComponent, {
            width: '500px',
            data: {
                ...this.user,
                tags: this.tags,
                username: this.user.username
            }
        });
        dialogRef.afterClosed().subscribe(_ => this.ngOnInit());
    }
}
