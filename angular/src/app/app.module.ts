import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule, MatChipsModule, MatAutocompleteModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DiscoverComponent } from './discover/discover.component';
import { SearchComponent } from './search/search.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    RegistrationComponent,
    MainNavComponent,
    DiscoverComponent,
    SearchComponent,
    ProfileComponent,
    ProjectFormComponent,
    LogoutComponent,
    ProjectComponent
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
    HttpClientModule
  ],
  exports: [MainNavComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
