import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFormService } from './project-form.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  projectForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    email: [null, Validators.required],
    url: [null, Validators.required],
    github: [null, Validators.required]
  });

  onSubmit() { console.log(this.projectForm.value); }

  constructor(
    private fb: FormBuilder,
    private projectFormService: ProjectFormService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
