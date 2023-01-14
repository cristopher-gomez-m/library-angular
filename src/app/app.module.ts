import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { CardComponent } from './card/card.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { SesionComponent } from './sesion/sesion.component';
import { PayBooksPageComponent } from './pay-books-page/pay-books-page.component';
import { PayBookCardComponent } from './pay-book-card/pay-book-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialPageComponent,
    CardComponent,
    ShoppingCarComponent,
    SesionComponent,
    PayBooksPageComponent,
    PayBookCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
