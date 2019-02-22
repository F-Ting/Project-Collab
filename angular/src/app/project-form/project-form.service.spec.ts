import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProjectFormService } from './project-form.service';


describe('ProjectFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [ProjectFormService]
  }));

  it('should be created', () => {
    const service: ProjectFormService = TestBed.get(ProjectFormService);
    expect(service).toBeTruthy();
  });

  it('should have a create function', () => {
    const service: ProjectFormService = TestBed.get(ProjectFormService);
    expect(service.create).toBeDefined();
  });

  it('should have an edit function', () => {
    const service: ProjectFormService = TestBed.get(ProjectFormService);
    expect(service.edit).toBeDefined();
  });

  it('should have an delete function', () => {
    const service: ProjectFormService = TestBed.get(ProjectFormService);
    expect(service.delete).toBeDefined();
  });
});
