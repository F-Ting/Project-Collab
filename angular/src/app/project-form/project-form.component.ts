import { Component, OnInit, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFormService } from './project-form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from '../models/project';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  project;
  projectForm;
  submitted = false;
  deleted = false;
  response = null;
  imagePath;
  imgURL: any;
  message: string;

  onSubmit() {
    this.submitted = true;
    if (!this.project) {
      this.projectFormService.create({...this.projectForm.value, image: this.imgURL}).subscribe((response) => {
        this.response = response;
        this.router.navigate(['/discover']);
      },
      error => {
        this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss");
        console.log(error);
      });
    } else {
      this.projectFormService.edit({...this.projectForm.value, image: this.imgURL},this.project.id).subscribe((response) => {
        this.response = response;
        this.router.navigate(['/discover']);
      },
      error => {
        this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss");
        console.log(error);
      });
    }
  }

  onDelete() {
    this.deleted = true;
    this.projectFormService.delete({'id': this.project.id}).subscribe((response) => {
      this.router.navigate(['/discover']);
    },
    error => {
      this.snackBar.open("The project was not deleted.", "Dismiss");
      console.log(error);
    });
  }

  constructor(
    private fb: FormBuilder,
    private projectFormService: ProjectFormService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('project'));
    localStorage.removeItem("project");
    this.projectForm = this.fb.group({
      user_id: localStorage.getItem("user_id"),
      name: [this.project && this.project["name"] || null, Validators.required],
      description: [this.project && this.project.description || null, Validators.required],
      url: [this.project && this.project.url || null, Validators.required],
      github: [this.project && this.project.github || null, Validators.required]
    });
  }
  preview(files) {
    if (files.length === 0)
      return;
 
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
