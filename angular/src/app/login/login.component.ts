import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

// componenet that handels user login
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  // form data
  model: any = {};
  // error flag
  error: boolean = false;






}
