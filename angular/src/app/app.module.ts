import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
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
