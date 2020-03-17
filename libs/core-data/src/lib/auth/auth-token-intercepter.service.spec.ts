import { TestBed } from '@angular/core/testing';

import { AuthTokenIntercepterService } from './auth-token-intercepter.service';

describe('AuthTokenIntercepterService', () => {
  let service: AuthTokenIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
