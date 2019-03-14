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
  userLoaded: Promise<boolean>;

  constructor(private discoverService: ProfileService) {}

  ngOnInit() {
   this.getUsers();
  }

  getUsers() {
    this.discoverService.getUsers().subscribe(
      (response: Array<any>) => {
        this.user = response;
        this.userLoaded = Promise.resolve(true);
      },
      error => {
        this.error = true;
      }
    );
  }
}
