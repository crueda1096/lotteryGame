import { Component, OnInit } from '@angular/core';
import { BallsService } from 'src/app/service/balls.service';
import {ballsInterface} from '../../models/balls';
import {BetService} from '../../service/bet.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  selectedBalls:ballsInterface[] = [];
  value:number = 0;

  constructor(public _BallsService:BallsService, public BetService:BetService) { }

  ngOnInit(): void {
    this._BallsService.receivedData().subscribe((result:any)=>{
      this.selectedBalls = result;
    })
  }

  setValue(){
    this.BetService.spreadValue(this.value);  
  }

}
