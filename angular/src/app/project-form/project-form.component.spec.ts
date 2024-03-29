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
  MatInputModule,
  MatSnackBarModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule,
} from '@angular/material';
import { Project } from '../models/project';
import { TagsAutocompleteComponent } from '../tags-autocomplete/tags-autocomplete.component';


describe('ProjectFormComponent', () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;
  const dummyProject = new Project(1, "test_title", "test_description", "test_owner", "test_email", "test_github", "test_url", "test_startDate", "test_status", "test_img");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFormComponent, TagsAutocompleteComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatIconModule,
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
      expect(input.nativeElement.value).toEqual(dummyProject.name);
    });
  }));

  it('should set submitted to be true', () => {
    component.onSubmit();
    fixture.detectChanges();
    expect(component.submitted).toBeTruthy();
  });

  it('should set deleted to be true', () => {
    component.project = dummyProject;
    component.onDelete();
    fixture.detectChanges();
    expect(component.deleted).toBeTruthy();
  });
});
