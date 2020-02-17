import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AppStoreService } from './store/appstore.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
