import { TestBed, inject } from '@angular/core/testing';

import { MockedDatabaseService } from './mocked-database.service';

describe('MockedDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockedDatabaseService]
    });
  });

  it('should ...', inject([MockedDatabaseService], (service: MockedDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
