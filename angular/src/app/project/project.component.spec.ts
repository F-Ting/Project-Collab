import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import {
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatFormFieldModule,
  } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TagsComponent } from '../tags/tags.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent,TagsComponent ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        FontAwesomeModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatChipsModule,
        MatFormFieldModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
