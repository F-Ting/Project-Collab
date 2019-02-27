import { Component, OnInit } from "@angular/core";
import { ProfileService } from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  error: boolean = false;
  user;

  constructor(private discoverService: ProfileService) {}

  ngOnInit() {
  this.getUsers();
  console.log(this.user)
  }

  getUsers() {
    this.discoverService.getUsers().subscribe(
      (response: Array<any>) => {
        this.user = response;
        console.log(this.user)
      },
      error => {
        this.error = true;
      }
    );
  }
}
