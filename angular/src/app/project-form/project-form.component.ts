import { Component, OnInit, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFormService } from './project-form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TagsService } from '../tags/tags.service';
import { Location } from '@angular/common';

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
  addedTags: string[] = [];
  removedTags: string[] = [];

  onSubmit() {
    this.submitted = true;
    if (!this.project) {
      this.projectFormService.create({...this.projectForm.value, image: this.imgURL}).subscribe((response) => {
        this.response = response;
        this.updateProjectTags(response['id']);
        this.router.navigate(['/discover']);
      },
      error => {
        this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss", {
            duration: 2500
        });
        console.log(error);
      });
    } else {
      this.projectFormService.edit({...this.projectForm.value, image: this.imgURL},this.project.id).subscribe((response) => {
        this.response = response;
        this.updateProjectTags(response['id']);
        this.router.navigate(['/discover']);
      },
      error => {
        this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss", {
            duration: 2500
        });
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
      this.snackBar.open("The project was not deleted.", "Dismiss", {
        duration: 2500
      });
      console.log(error);
    });
  }

  onBack() {
    this.location.back();
  }

  constructor(
    private fb: FormBuilder,
    private projectFormService: ProjectFormService,
    public router: Router,
    private snackBar: MatSnackBar,
    private tagService: TagsService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('project'));
    localStorage.removeItem("project");

    // This is kind of a hack because the project doesn't always contain the tags at the moment
    // so just fetch the tags independently.
    // When accessing the edit project from from the discover page, the tags are not available,
    // but when accessing the edit project form from the project detail page they are.
    if (this.project) {
      this.tagService.getForProject(this.project.id).subscribe((tags: Array<any>) => {
        this.projectForm = this.fb.group({
          user_id: localStorage.getItem("user_id"),
          name: [this.project && this.project["name"] || null, Validators.required],
          description: [this.project && this.project.description || null, Validators.required],
          tasks_required: [this.project && this.project.tasks_required || null, Validators.required],
          url: [this.project && this.project.url || null, Validators.required],
          github: [this.project && this.project.github || null, Validators.required],
          tags: [tags.map(tag => tag.tag).splice(0)]
        });
      });
    } else {
      this.projectForm = this.fb.group({
        user_id: localStorage.getItem("user_id"),
        name: [this.project && this.project["name"] || null, Validators.required],
        description: [this.project && this.project.description || null, Validators.required],
        tasks_required: [this.project && this.project.tasks_required || null, Validators.required],
        url: [this.project && this.project.url || null, Validators.required],
        github: [this.project && this.project.github || null, Validators.required],
        tags: []
      });
    }
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

  updateProjectTags(projectId) {
    if (this.addedTags.length > 0) {
      this.tagService.addToProject(projectId, { tags: this.addedTags }).subscribe(_ => { }, error => {
        this.snackBar.open('Unable to add tags to project', 'Dismiss', {
            duration: 2500
        });
        console.log(error);
      });
    }
    if (this.removedTags.length > 0) {
      this.tagService.removeFromProject(projectId, { tags: this.removedTags }).subscribe(_ => { }, error => {
        this.snackBar.open('Unable to remove tags from project', 'Dismiss', {
            duration: 2500
        });
        console.log(error);
      });
    }
  }

  tagsChangedHandler(tags) {
    const tagInput = this.projectForm.get('tags').value || [];
    this.addedTags = tags.filter(tag => tagInput.indexOf(tag) === -1);
    this.removedTags = tagInput.filter(tag => tags.indexOf(tag) === -1);
  }
}
