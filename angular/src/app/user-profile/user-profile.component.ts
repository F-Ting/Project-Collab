import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

const log = console.log;

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    public projects: any[] = [];
    public recommendedProjects: any[] = [];
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );

    responsRow = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({matches}) => {
        return matches ? 2 : 1;
      })
    );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private userProfileService: UserProfileService,
        private route: ActivatedRoute,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.getProjects(params.get("username"));
            this.getRecommendedProjects(params.get("username"));
          })
    }

    private getProjects(username) {
        this.userProfileService
            .getProjects(username)
            .subscribe(
                projects => (this.projects = projects),
                error => log(error)
            );
    }

    getRecommendedProjects(username: string): any {
        // Call API for recommended projects
        this.userProfileService
            .getRecProjects(username)
            .subscribe(
                projects =>(this.recommendedProjects = projects),
                error => log(error)
            )
    }
}
