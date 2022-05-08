import { Component, OnInit } from '@angular/core';
import { BallsService } from '../../service/balls.service';
import {ballsInterface} from '../../models/balls';
import {BetService} from '../../service/bet.service';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  selectedBalls:ballsInterface[] = [];
  value:number = 0;
  betValueControl = new FormGroup({

    amount: new FormControl('', [Validators.required, Validators.min(5)])

  });

  constructor(public _BallsService:BallsService, public _BetService:BetService, private _FormBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.getSelectedBalls();
  }

  getSelectedBalls():void{
    this._BallsService.receivedData().subscribe((result:any)=>{
      this.selectedBalls = result;
    })
  }

  async setValue(){
    if(this.betValueControl.controls['amount'].value < 5){
      return;
    }
    await this._BetService.spreadValue(this.betValueControl.controls['amount'].value);  
    this.betValueControl.controls['amount'].setValue(0)
  }

  selectAllContent($event:any) {
    $event.target.select();
  }


}
