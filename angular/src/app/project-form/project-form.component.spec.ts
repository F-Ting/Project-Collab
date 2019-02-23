import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectFormComponent } from './project-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  const dummyProject = new Project(1, 'test_name', 'test_description', 'test_owner', 'test_email', 'test_url', 'test_github');

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

  it('should contain an email input', () => {
    expect(document.getElementById('project-form-email')).toBeTruthy();
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

  // TODO: FIX ME!
  // it('should populate fields when there is a project', () => {
  //   component.project = dummyProject;
  //   expect(document.getElementsByTagName('input')[0].value).toEqual('test_name');
  // });
});
