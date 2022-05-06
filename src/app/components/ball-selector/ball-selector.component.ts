import { Component, OnInit } from '@angular/core';
import { BallsService } from '../../service/balls.service';
import {ballsInterface} from '../../models/balls';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  public balls:ballsInterface[] = [];

  constructor(public _BallsService:BallsService) { }

  ngOnInit(): void {
    
    this._BallsService.getBalls().subscribe((result:any) => {
      this.balls = result;
    })

  }

  selectBall(ball:ballsInterface){
    ball.ingame = true;
    let balls = this.balls.filter(b => b.ingame==true);
    this._BallsService.spreadBalls(balls);
  }

  clearBalls(){
    this.balls.map(b=> b.ingame = false)
    this._BallsService.spreadBalls(null);
  }

}
