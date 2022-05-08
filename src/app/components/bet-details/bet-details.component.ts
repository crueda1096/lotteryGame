import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet-details',
  templateUrl: './bet-details.component.html',
  styleUrls: ['./bet-details.component.css']
})
export class BetDetailsComponent implements OnInit {

  @Input() detailsData:any;
  @Input() betValue:any;
  @Output() clearBet: EventEmitter<any> = new EventEmitter<any>();
  reward:number = 0;

  constructor() {}

  ngOnInit(): void {
    this.reward = this.betValue * 1.15;
  }

  clear():void{
    this.clearBet.emit();
  }

}
