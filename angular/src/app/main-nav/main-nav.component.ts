import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  currentUsername: String;
  navLinks = [];
    //default links when users are logged in
  loggedInLinks = [
    this.createNavLinkObject("Create Project","create"),
    this.createNavLinkObject("Logout","logout"),
    this.createNavLinkObject("Profile",`user/`),
  ]
  //default links when users are not logged in
  loggedOutLinks = [
    this.createNavLinkObject("Login","login"),
    this.createNavLinkObject("Signup","registration")
  ]
  // default common links across states
  commonLinks = [
    this.createNavLinkObject("Discover","discover")
  ]
  subscription: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private loginService: LoginService, private snackbar: MatSnackBar, private router: Router) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));

      // subscribe to nav-bar to login service
        this.subscription = this.loginService.getLoginStatus().subscribe(login => {
          this.navLinks = login.status ? this.commonLinks.concat(this.loggedInLinks) : this.commonLinks.concat(this.loggedOutLinks)
          this.currentUsername = localStorage.getItem("username")
        });
    }

  //populate nav-bar based on login status
  ngOnInit() {
    this.currentUsername = localStorage.getItem("username")
    this.navLinks = this.currentUsername == null ? this.commonLinks.concat(this.loggedOutLinks) : this.commonLinks.concat(this.loggedInLinks)
  }

  createNavLinkObject(name:String,url:String){
    return Object.assign({},{
      name: name,
      url: url
    })
  }

  properLogout() {
    this.snackbar.open("You have successfully logged out. You will now be redirected to the home page.", "Dismiss", {
        duration: 2500
    });
    setTimeout(() => {
        this.router.navigate(['/logout']);
    }, 3000);  // 3s
  }
}
