import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BallsService } from '../../service/balls.service';


import { BallSelectorComponent } from './ball-selector.component';

let ball:any = 
  {
    id: 1,
    number:1,
    color:"#ffff",
    ingame:false
  }

let balls:any = [
    {
      id: 1,
      number:1,
      color:"#ffff",
      ingame:false
    }
  ]

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;
  let ballsService:BallsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    ballsService = fixture.debugElement.injector.get(BallsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectBall test',()=>{
    const spy = jest.spyOn(ballsService,'spreadBalls').mockImplementation(()=>null);
    component.selectBall(ball);
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('clearBalls test',()=>{
    const spy = jest.spyOn(ballsService,'spreadBalls').mockImplementation(()=>null);
    component.balls = balls
    component.clearBalls();
    expect(spy).toHaveBeenCalledTimes(1);
  })

});
