import { TestBed } from '@angular/core/testing';

import { AbwsService } from './abws.service';

describe('AbwsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbwsService = TestBed.get(AbwsService);
    expect(service).toBeTruthy();
  });
});
