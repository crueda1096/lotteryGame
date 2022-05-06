import { Component, OnInit } from '@angular/core';
import {BetService} from './service/bet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lotteryGame';
  betValue:number = 0;

  constructor(public _BetService:BetService){}

  ngOnInit(): void {
    this._BetService.receivedData().subscribe(result=>{
      this.betValue = result*5;
    })
  }
}


