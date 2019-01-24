import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsiteEvent {
  private sourceEventChangeHeight = new BehaviorSubject<number>(0);
  eventChangeHeight = this.sourceEventChangeHeight.asObservable();
  constructor() {}

  changeHeight(height: number) {
    this.sourceEventChangeHeight.next(height);
  }
}
