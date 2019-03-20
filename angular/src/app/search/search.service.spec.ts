import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('should have a getProjects function', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.getProjects).toBeDefined();
  });

  it('should have a getRecommendedTags function', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.getRecommendedTags).toBeDefined();
  });
});
