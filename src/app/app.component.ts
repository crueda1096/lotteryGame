import { Component, OnInit } from '@angular/core';
import {BetService} from './service/bet.service';
import {ballsInterface} from './models/balls';
import { BallsService } from 'src/app/service/balls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lotteryGame';
  betValue:number = 0;
  selectedBalls:ballsInterface[] = [];
  objResult:any = null;
  public balls:ballsInterface[] = [];

  constructor(public _BetService:BetService,public _BallsService:BallsService){}

  ngOnInit(): void {

    this._BetService.receivedData().subscribe(result=>{
      this.betValue = result*5;
    });

    this._BallsService.receivedData().subscribe((result:any)=>{
      this.selectedBalls = result;
    })

    this._BallsService.getBalls().subscribe((result:any) => {
      this.balls = result;
    })

  }

  makeBet(): void {
    let min = 1;
    let max = 11;
    let random = Math.random();
    let winningBall = Math.floor((random * (max-min)) +min);
    this.objResult = this.resultBet(winningBall);
  }

  resultBet(number:number){
    let filter = this.selectedBalls.filter(f=>f.number == number);
    if(filter.length > 0){
      return {
        status:'winner',
        dataBall: filter[0],
        msg:"You Won",
        class:"won"
      }
    }else{
      let ball =  this.balls.filter((f:any)=>f.number==number);
      return {
        status:'losser',
        dataBall: ball[0],
        msg:"You Lost",
        class:"lost"
      }
    }
  }

  clearBet(){
    this.objResult = null;
    this._BallsService.spreadBalls([]);
    this._BetService.spreadValue(0);
  }

}


