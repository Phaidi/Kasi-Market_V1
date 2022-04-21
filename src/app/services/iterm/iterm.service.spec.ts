import { TestBed } from '@angular/core/testing';

import { ItermService } from './iterm.service';

describe('ItermService', () => {
  let service: ItermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
