import { TestBed } from '@angular/core/testing';

import { AdminAuthGuardServiceService } from '../admin-auth-guard.service';

describe('AdminAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGuardServiceService = TestBed.get(AdminAuthGuardServiceService);
    expect(service).toBeTruthy();
  });
});
