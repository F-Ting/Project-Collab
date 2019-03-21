import { TestBed } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserProfileServiceService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
    );

    it('should be created', () => {
        const service: UserProfileService = TestBed.get(UserProfileService);
        expect(service).toBeTruthy();
    });

    it('should have a getUser function', () => {
        const service: UserProfileService = TestBed.get(UserProfileService);
        expect(service.getUser).toBeDefined();
    });

    it('should have a getProjects function', () => {
        const service: UserProfileService = TestBed.get(UserProfileService);
        expect(service.getProjects).toBeDefined();
    });
});
