import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unguardGuard } from './unguard.guard';

describe('unguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
