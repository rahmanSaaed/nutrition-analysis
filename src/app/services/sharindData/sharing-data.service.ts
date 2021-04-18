import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  analysisData: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  transferAnalaysisData(data: any) {
    this.analysisData.next(data);
  }
}
