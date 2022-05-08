import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { BallsService } from './service/balls.service';
import { BetService } from './service/bet.service';

let balls:any = [
  {
    id: 1,
    number:1,
    color:"#ffff",
    ingame:false
  }
]

let selecteBalls:any = [
  {
    id: 3,
    number:3,
    color:"#ffff",
    ingame:false
  }
]


let value:number = 0;


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ballsService:BallsService;
  let betService:BetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        BallsService,
        BetService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    ballsService = fixture.debugElement.injector.get(BallsService);
    betService = fixture.debugElement.injector.get(BetService);
    fixture.detectChanges();
  });

  it('loadData test',()=>{
    const spy = jest.spyOn(ballsService,'receivedData').mockReturnValueOnce(of(balls));
    const spy2 = jest.spyOn(betService,'receivedData').mockReturnValueOnce(of(value));
    component.loadData();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(1);
  })


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lotteryGame'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lotteryGame');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('lotteryGame app is running!');
  });

  it('makeBet test',()=>{
    component.makeBet();
  })


  it('resultBet test, lost',()=>{
    component.balls= balls;
    component.selectedBalls = selecteBalls;
    const resultBet = component.resultBet(1);
    expect(resultBet).toMatchObject({
      status:'losser',
      dataBall: {
        id: 1,
        number:1,
        color:"#ffff",
        ingame:false
      },
      msg:"You Lost",
      class:"lost"
    });
  })

  it('resultBet test, won',()=>{
    component.balls= balls;
    component.selectedBalls = selecteBalls;
    const resultBet = component.resultBet(3);
    expect(resultBet).toMatchObject({
      status:'winner',
      dataBall:{
        id: 3,
        number:3,
        color:"#ffff",
        ingame:false
      },
      msg:"You Won",
      class:"won"
    });
  })


  it('clearBet test',()=>{
    const spy = jest.spyOn(ballsService,'spreadBalls').mockImplementation(()=>null);
    const spy2 = jest.spyOn(betService,'spreadValue').mockImplementation(()=>null);
    component.clearBet();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(1);
  })

});
