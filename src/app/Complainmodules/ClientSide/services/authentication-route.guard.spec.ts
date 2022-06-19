import { TestBed } from '@angular/core/testing';

import { AuthenticationRouteGuard } from './authentication-route.guard';

describe('AuthenticationRouteGuard', () => {
  let guard: AuthenticationRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
