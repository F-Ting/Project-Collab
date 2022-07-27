import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

// componenet that handels user login
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router, private snackBar: MatSnackBar) { }

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;
  error = false;

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe((response)=>{
        this.error = false;
        localStorage.setItem("username", response["username"]);
        localStorage.setItem("user_id", response["id"]);
        this.loginService.setLoginStatus(true);
        this.router.navigate(['/discover']);
    },
    error => {
      this.snackBar.open("The username or password is incorrect.", "Dismiss", {
          duration: 2500
      });
      console.log(error);
      this.error = true;
    });

  }

}
