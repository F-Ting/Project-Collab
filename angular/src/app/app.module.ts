import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DiscoverComponent } from './discover/discover.component';
import { SearchComponent } from './search/search.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './tags/tags.component';
import { EditUserProfileComponent } from './user-profile/edit-user-profile/edit-user-profile.component';
import { TagsAutocompleteComponent } from './tags-autocomplete/tags-autocomplete.component';
import { UserInfoComponent } from './user-profile/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    RegistrationComponent,
    MainNavComponent,
    DiscoverComponent,
    SearchComponent,
    ProjectFormComponent,
    LogoutComponent,
    ProjectComponent,
    ProjectCardComponent,
    UserProfileComponent,
    TagsComponent,
    EditUserProfileComponent,
    TagsAutocompleteComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  exports: [MainNavComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditUserProfileComponent
  ]
})
export class AppModule { }
