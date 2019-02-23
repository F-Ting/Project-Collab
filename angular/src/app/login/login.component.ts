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

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

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
        console.log(response);
    },
    error => {
      this.error = true;
    });

  }

}
