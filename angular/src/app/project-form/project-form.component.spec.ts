import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectFormComponent } from './project-form.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { Project } from '../models/project';


describe('ProjectFormComponent', () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;
  const dummyProject = new Project(1, 'test_title', 'test_description', 'test_owner', 'test_url', 'test_github');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFormComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a name input', () => {
    expect(document.getElementById('project-form-name')).toBeTruthy();
  });

  it('should contain a description input', () => {
    expect(document.getElementById('project-form-description')).toBeTruthy();
  });

  it('should contain a url input', () => {
    expect(document.getElementById('project-form-url')).toBeTruthy();
  });

  it('should contain a github input', () => {
    expect(document.getElementById('project-form-github')).toBeTruthy();
  });

  it('should contain a submit button', () => {
    expect(document.getElementById('project-form-submit')).toBeTruthy();
  });

  it('should not contain a delete button when there is no project', () => {
    expect(document.getElementById('project-form-delete')).toBeFalsy();
  });

  it('should contain a delete button when there is a project', () => {
    component.project = dummyProject;
    fixture.detectChanges();
    expect(document.getElementById('project-form-delete')).toBeTruthy();
  });

  it('should populate fields when there is a project', async(() => {
    component.projectForm.controls['name'].setValue("test_title");
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      console.log(input.nativeElement.value);
      expect(input.nativeElement.value).toEqual(dummyProject.title);
    });
  }));

  it('should set submitted to be true', () => {
    component.projectForm.controls['name'].setValue("test");
    component.projectForm.controls['description'].setValue("test");
    component.projectForm.controls['url'].setValue("test");
    component.projectForm.controls['github'].setValue("test");
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
});
