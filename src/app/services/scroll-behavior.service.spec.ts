import { TestBed } from '@angular/core/testing';

import { ScrollBehaviorService } from './scroll-behavior.service';

describe('ScrollBehaviorService', () => {
  let service: ScrollBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
