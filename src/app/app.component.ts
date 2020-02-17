import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStoreService, AppStoreModel, AppStoreAction } from './store/appstore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
 
  lastPushedButtonNo : number = -1;
  subStore : Subscription;
  constructor(
    private store : AppStoreService
  ) {}

  ngOnInit(): void {
    this.subStore = this.store.subscribe(
      (data:AppStoreModel) => {
        if(data.action == AppStoreAction.UNPUSHED){
          this.lastPushedButtonNo = data.payload.no;
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.subStore.unsubscribe();
  }
}
