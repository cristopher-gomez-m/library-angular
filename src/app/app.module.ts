import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { CardComponent } from './card/card.component';
import { SesionComponent } from './sesion/sesion.component';
import { ShoppingCarModule } from './shopping-car/shopping-car.module';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialPageComponent,
    CardComponent,
    SesionComponent,
    ShoppingCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ShoppingCarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
