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
  // constructor(private fb: MatStepperModule, private registrationService: RegistrationService, private router: Router) { }
  //
  // registrationForm = this.fb.group({
  //   username: [null, Validators.required],
  //   password: [null, [Validators.required, Validators.minLength(8)]],
  //   passwordConfirm: [null, [Validators.required, Validators.minLength(8)]],
  //   email: [null, [Validators.required, Validators.email]],
  //   firstName: [null, Validators.required],
  //   lastName: [null, Validators.required],
  // });
  // ngOnInit() {
  // }

  onSubmit() {

    if(this.firstGroup.value.password == this.firstGroup.value.passwordConfirm){
        this.thirdGroup.value.firstName = `${this.thirdGroup.value.firstName} ${this.thirdGroup.value.lastName}`;
        this.registrationService.registration((this.firstGroup.value, this.secondGroup.value, this.thirdGroup.value) , "student").subscribe((response)=>{
            this.error = false;
            console.log(response);
        },
        error => {
          this.error = true;
        });
    } else{
      console.log("password not matching")
        this.error = true;
    }



  }

}
