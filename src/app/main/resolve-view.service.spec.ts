import { TestBed, inject } from '@angular/core/testing';

import { ResolveViewService } from './resolve-view.service';

describe('ResolveViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveViewService]
    });
  });

  it('should be created', inject([ResolveViewService], (service: ResolveViewService) => {
    expect(service).toBeTruthy();
  }));
});
