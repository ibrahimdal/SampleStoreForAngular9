import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppStoreService {
     private rx:Subject<AppStoreModel> = new Subject<AppStoreModel>();

     next(appStoreModel : AppStoreModel){
        this.rx.next(appStoreModel);
     }

     subscribe(fonk){
         return this.rx.subscribe(fonk);
     }
}

export class AppStoreModel {
    action:AppStoreAction;
    payload:AppStorePayloadModel;
}

export enum AppStoreAction{
    UNPUSHED = 1
}

export class AppStorePayloadModel {
    no : number;
}