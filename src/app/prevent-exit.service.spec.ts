import { TestBed, inject } from '@angular/core/testing';

import { PreventExitService } from './prevent-exit.service';

describe('PreventExitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventExitService]
    });
  });

  it('should be created', inject([PreventExitService], (service: PreventExitService) => {
    expect(service).toBeTruthy();
  }));
});
