import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

// componenet that handels user login
export class LoginComponent implements OnInit {

    loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

    hasUnitNumber = false;

    ngOnInit() {
    }

  constructor(private fb: FormBuilder, private loginService: LoginService, public router: Router) { }



  onSubmit() {
    console.log(this.loginForm);
    alert('Thanks!');
  }





}
