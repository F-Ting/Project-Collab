import { TestBed } from '@angular/core/testing';

import { DiscoverService } from './discover.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DiscoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DiscoverService = TestBed.get(DiscoverService);
    expect(service).toBeTruthy();
  });

  it('should have a getProjects function', () => {
    const service: DiscoverService = TestBed.get(DiscoverService);
    expect(service.getProjects).toBeDefined();
  });

  it('should have a getProjectsWithTags function', () => {
    const service: DiscoverService = TestBed.get(DiscoverService);
    expect(service.getProjectsWithTags).toBeDefined();
  });
});
