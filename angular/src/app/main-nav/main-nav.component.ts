import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  navLinks = [];
    //default links when users are logged in
  loggedInLinks = [
    this.createNavLinkObject("Create Project","create"),
    this.createNavLinkObject("Logout","logout"),
    this.createNavLinkObject("Profile","profile"),
  ]
  //default links when users are not logged in
  loggedOutLinks = [
    this.createNavLinkObject("Login","login"),
    this.createNavLinkObject("Signup","signup")
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

  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private loginService: LoginService) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));

      // subscribe to nav-bar to login service
        this.subscription = this.loginService.getLoginStatus().subscribe(login => {
          this.navLinks = login.status ? this.commonLinks.concat(this.loggedInLinks) : this.commonLinks.concat(this.loggedOutLinks)
      });
    }

  //populate nav-bar based on login status
  ngOnInit() {
    let user = localStorage.getItem('username')
    this.navLinks = user == null ? this.commonLinks.concat(this.loggedOutLinks) : this.commonLinks.concat(this.loggedInLinks)
  }
  
  createNavLinkObject(name:String,url:String){
    return Object.assign({},{
      name: name,
      url: url
    })
  }

}
