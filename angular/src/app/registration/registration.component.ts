import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})

// component that handles user registration
export class RegistrationComponent implements OnInit {
  isLinear = true;
  lastBack = false;
  hasUnitNumber = false;
  error = false;
  firstGroup: FormGroup;
  secondGroup: FormGroup;
  thirdGroup: FormGroup;
  data;

  constructor(private _formBuilder: FormBuilder,
    private registrationService: RegistrationService, private router: Router,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.firstGroup = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(8)]]
    });
    this.secondGroup = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
    this.thirdGroup = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  onSubmit() {
    this.data = {"name": `${this.thirdGroup.value.firstName} ${this.thirdGroup.value.lastName}`,
      "username": this.firstGroup.value.username,
      "bio": "",
      "password": this.firstGroup.value.password,
      "email": this.secondGroup.value.email,
      "photo": "",
      "linked_in": "",
      "github": ""};

    if (this.firstGroup.value.password != this.firstGroup.value.passwordConfirm) {
      this.snackBar.open("The passwords did not match.", "Dismiss");
    } else {
      this.registrationService.registration(this.data, "student").subscribe((response)=>{
        this.snackBar.open("Your registration has succeeded. Welcome to Project Collab!", "Dismiss");
        this.error = false;
        // set up local storage with necessary information
        localStorage.setItem("username", response["username"]);
        localStorage.setItem("user_id", response["id"]);
      },
      error => {
        this.snackBar.open("The username has already been taken.", "Dismiss");
        this.error = true;
        console.log(error);
      });
    }
  }

  redirect() {
    this.router.navigateByUrl('discover');
  }

}
