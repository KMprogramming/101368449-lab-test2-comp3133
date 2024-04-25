import { TestBed } from '@angular/core/testing';

import { SpaceXService } from './spacex-api.service';

describe('SpacexApiService', () => {
  let service: SpaceXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
