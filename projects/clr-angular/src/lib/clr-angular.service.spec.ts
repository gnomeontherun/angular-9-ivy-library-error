import { TestBed } from '@angular/core/testing';

import { ClrAngularService } from './clr-angular.service';

describe('ClrAngularService', () => {
  let service: ClrAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClrAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
