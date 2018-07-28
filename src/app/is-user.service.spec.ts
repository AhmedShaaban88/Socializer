import { TestBed, inject } from '@angular/core/testing';

import { IsUserService } from './is-user.service';

describe('IsUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUserService]
    });
  });

  it('should be created', inject([IsUserService], (service: IsUserService) => {
    expect(service).toBeTruthy();
  }));
});
