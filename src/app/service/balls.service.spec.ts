import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BallsService } from './balls.service';

describe('BallsService', () => {
  let service: BallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test spread',()=>{
    let data:any = [];
    service.spreadBalls(data);
  });

});
