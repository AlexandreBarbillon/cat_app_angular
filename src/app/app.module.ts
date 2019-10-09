import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { LilleFooterComponent } from './lille-footer/lille-footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CatCardComponent, LilleFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
