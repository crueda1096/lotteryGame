import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetService } from '../../service/bet.service';
import { BallsService } from '../../service/balls.service';

import { BetSlipComponent } from './bet-slip.component';
import { of } from 'rxjs';

let balls:any = [
  {
    id: 1,
    number:1,
    color:"#ffff",
    ingame:false
  }
]

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;
  let ballsService:BallsService;
  let betService:BetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSlipComponent ],
      providers: [
        BallsService,
        BetService
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })  
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    ballsService = fixture.debugElement.injector.get(BallsService);
    betService = fixture.debugElement.injector.get(BetService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setvalue test',()=>{
    const amountField = component.betValueControl.get('amount');
    amountField?.setValue('100');
    const spy = jest.spyOn(betService,'spreadValue').mockImplementation(()=>null);
    component.setValue();
    expect(spy).toBeCalled();
  })

  it('setvalue form invalid test',()=>{
    const amountField = component.betValueControl.get('amount');
    amountField?.setValue('2');
    expect(amountField?.valid).toBe(false);
  })

  it('setvalue form valid test',()=>{
    const amountField = component.betValueControl.get('amount');
    amountField?.setValue('5');
    expect(amountField?.valid).toBe(true);
  })

  it('selectAllContent test',()=>{
    let event:any={
      target: {
        select:()=>{
          return null;
        }
      }
    }
    component.selectAllContent(event);
  })

  it('getSelectedBalls test',()=>{
    const spy = jest.spyOn(ballsService,'receivedData').mockReturnValueOnce(of(balls))
    component.getSelectedBalls();
    expect(spy).toHaveBeenCalledTimes(1);
  })

});
