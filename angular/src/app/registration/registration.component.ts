import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  verticalFlag = false;

  constructor(private _formBuilder: FormBuilder,
    private registrationService: RegistrationService, private router: Router,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.verticalFlag = (window.innerWidth < 600);
    this.firstGroup = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(8)]]
    }, {validator: this.checkPasswords});
    this.secondGroup = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
    this.thirdGroup = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  onResize(event) {
    this.verticalFlag = (window.innerWidth < 600);
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
      this.snackBar.open("The passwords did not match.", "Dismiss", {
        duration: 2500
      });
    } else {
      this.registrationService.registration(this.data, "student").subscribe((response)=>{
        this.snackBar.open("Your registration has succeeded. Welcome to Project Collab!", "Dismiss", {
            duration: 2500
        });
        this.error = false;
      },
      error => {
        this.snackBar.open("The username has already been taken.", "Dismiss", {
            duration: 2500
        });
        this.error = true;
        console.log(error);
      });
    }
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  checkPasswordsButton() {
    if (this.checkPasswords(this.firstGroup)) {
      this.snackBar.open("The passwords do not match", "Dismiss", {
          duration: 2500
      });
    }
  }

  redirect() {
    this.router.navigateByUrl('login');
  }

}
