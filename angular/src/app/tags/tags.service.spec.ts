import { TestBed } from '@angular/core/testing';

import { TagsService } from './tags.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
  });

  it('should have a getForProject function', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service.getForProject).toBeDefined();
  });
});
