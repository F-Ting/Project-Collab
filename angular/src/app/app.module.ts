import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    RegistrationComponent,
    MainNavComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  exports: [MainNavComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
