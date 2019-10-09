import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { LilleFooterComponent } from './lille-footer/lille-footer.component';
import { HeaderComponent } from './header/header.component';
import { CatCardListComponent } from './cat-card-list/cat-card-list.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CatCardComponent, LilleFooterComponent, HeaderComponent, CatCardListComponent, AddButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
