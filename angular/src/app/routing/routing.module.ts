import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DiscoverComponent } from '../discover/discover.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectComponent } from '../project/project.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: 'create', component: ProjectFormComponent},
  { path: 'user/:username', component: UserProfileComponent},
  { path: 'project/:id', component: ProjectComponent },
  { path: '', redirectTo: '/discover', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       (<any>window).ga('set', 'page', event.urlAfterRedirects);
       (<any>window).ga('send', 'pageview');
     }
   });
 }
 }
