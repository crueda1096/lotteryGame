import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private betValue = new Subject<any>();

  constructor() { }

  spreadValue(data:any){
    this.betValue.next(data);
  }

  receivedData(): Observable<any>{
    return this.betValue.asObservable();
  }

}
