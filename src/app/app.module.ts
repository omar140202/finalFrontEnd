import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {tarjeta} from './components/trjeta.component';
import {titulo} from './components/titulo.component';

@NgModule({
  declarations: [
    AppComponent, tarjeta, titulo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
