import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });

  it('should have a getProject function', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service.getProject).toBeDefined();
  });
});
