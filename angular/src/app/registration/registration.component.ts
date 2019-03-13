import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})

// component that handles user registration
export class RegistrationComponent implements OnInit {
  isLinear = true;
  hasUnitNumber = false;
  error = false;
  firstGroup: FormGroup;
  secondGroup: FormGroup;
  thirdGroup: FormGroup;
  data;

  constructor(private _formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) {}

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

    if (this.firstGroup.value.password == this.firstGroup.value.passwordConfirm) {
        this.registrationService.registration(this.data, "student").subscribe((response)=>{
            this.error = false;
            // set up local storage with necessary information
            localStorage.setItem("username", response["username"]);
            localStorage.setItem("user_id", response["id"]);

            console.log(response);
        },
        error => {
          this.error = true;
          console.log(error);
        });
    } else {
      console.log("password not matching")
      this.error = true;
    }
  }

}
