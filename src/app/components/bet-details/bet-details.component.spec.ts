import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDetailsComponent } from './bet-details.component';

let detailsData:any = {
  dataBall:{
    color:"#fff",
    number:1    
  },
  msg:"you win",
  class:"won",
  status:"winner"
}

describe('BetDetailsComponent', () => {
  let component: BetDetailsComponent;
  let fixture: ComponentFixture<BetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetDetailsComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetDetailsComponent);
    component = fixture.componentInstance;
    component.detailsData = detailsData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test clear function',()=>{
    component.clear();
  })

});
