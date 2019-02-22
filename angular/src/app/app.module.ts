import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule, MatChipsModule, MatAutocompleteModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DiscoverComponent } from './discover/discover.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    MainNavComponent,
    DiscoverComponent,
    SearchComponent
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
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule
  ],
  exports: [MainNavComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
