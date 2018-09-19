import { TestBed } from '@angular/core/testing';

import { YafiService } from './yafi.service';

describe('YafiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YafiService = TestBed.get(YafiService);
    expect(service).toBeTruthy();
  });
});
