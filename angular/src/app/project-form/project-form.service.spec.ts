import { TestBed } from '@angular/core/testing';

import { ProjectFormService } from './project-form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ProjectFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ProjectFormService = TestBed.get(ProjectFormService);
    expect(service).toBeTruthy();
  });
});
