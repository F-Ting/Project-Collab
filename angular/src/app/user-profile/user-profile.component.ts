import { Component, OnInit, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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

    constructor(
        private breakpointObserver: BreakpointObserver,
        private userProfileService: UserProfileService
    ) {}

    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
        map(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 2, rows: 1 },
                    { title: 'Card 2', cols: 2, rows: 1 },
                    { title: 'Card 3', cols: 2, rows: 1 },
                    { title: 'Card 3', cols: 2, rows: 1 },
                    { title: 'Card 3', cols: 2, rows: 1 },
                    { title: 'Card 3', cols: 2, rows: 1 },
                    { title: 'Card 3', cols: 2, rows: 1 },
                    { title: 'Card 4', cols: 2, rows: 1 }
                ];
            }

            return [
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        })
    );

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
                projects => {
                  this.projects = projects.map(project => project.project);
                  log(this.projects);
                },
                error => log(error)
            );
    }
}
