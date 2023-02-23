import { TestBed } from '@angular/core/testing';

import { LoremIpsumService } from './lorem-ipsum.service';

describe('LoremIpsumService', () => {
  let service: LoremIpsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoremIpsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return text', () => {
    const text = service.getRandomText();

    expect(text).toBeTruthy();
  });
});
