import { Component, Input } from '@angular/core';
import { AppStoreService, AppStoreModel, AppStoreAction, AppStorePayloadModel } from '../store/appstore.service';

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})
export  class CardComponent {

    @Input('no') no : number;

    constructor(
        private store : AppStoreService
    ) {
    }

    onPushCard(){
        this.store.next(<AppStoreModel>{
            action : AppStoreAction.UNPUSHED,
            payload : <AppStorePayloadModel>{
                no : this.no
            }
        });
    }
}