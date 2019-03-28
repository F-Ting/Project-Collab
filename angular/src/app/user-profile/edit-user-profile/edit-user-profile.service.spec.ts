import { TestBed } from '@angular/core/testing';

import { EditUserProfileService } from './edit-user-profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditUserProfileService', () => {
  beforeEach(() =>
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule]
      })
  );

  it('should be created', () => {
    const service: EditUserProfileService = TestBed.get(EditUserProfileService);
    expect(service).toBeTruthy();
  });
  it('should have a getUser function', () => {
    const service: EditUserProfileService = TestBed.get(EditUserProfileService);
    expect(service.saveUser).toBeDefined();
    });
});
