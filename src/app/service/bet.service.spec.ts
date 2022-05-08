import { TestBed } from '@angular/core/testing';

import { BetService } from './bet.service';

describe('BetService', () => {
  let service: BetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test spread',()=>{
    let data = 0;
    service.spreadValue(data);
  });

});
