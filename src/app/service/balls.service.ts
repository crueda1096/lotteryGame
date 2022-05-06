import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ballsInterface} from '../models/balls';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallsService {

  private selectedBallsSubject = new Subject<any>();

  constructor() {}

  getBalls():Observable<ballsInterface[]>{

    return of([
      {
        id: 1,
        number:1,
        color:"#ffff",
        ingame:false
      },
      {
        id: 2,
        number:2,
        color:"#DC6A6A",
        ingame:false
      },
      {
        id: 3,
        number:3,
        color:"#DCC26A",
        ingame:false
      },
      {
        id: 4,
        number:4,
        color:"#90DC6A",
        ingame:false
      },
      {
        id: 5,
        number:5,
        color:"#6ADCBB",
        ingame:false
      },
      {
        id: 6,
        number:6,
        color:"#6AAEDC",
        ingame:false
      },
      {
        id: 7,
        number:7,
        color:"#8D6ADC",
        ingame:false
      },
      {
        id: 8,
        number:8,
        color:"#DC6ADA",
        ingame:false
      },
      {
        id: 9,
        number:9,
        color:"#DC6A6A",
        ingame:false
      },
      {
        id: 10,
        number:10,
        color:"#00EEFF",
        ingame:false
      }
    ]);
  }


  spreadBalls(data:any){
    console.log("data --> ",data)
    this.selectedBallsSubject.next(data);
  }

  receivedData(): Observable<any>{
    return this.selectedBallsSubject.asObservable();
  }

}
