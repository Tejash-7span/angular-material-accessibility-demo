import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable()
export class DataShareService {
 
  shareData = new Subject<any>(); //Decalring new RxJs Subject
 
  constructor() {

  }

  reloadUserData(data){
    this.shareData.next(data);
  }
}
