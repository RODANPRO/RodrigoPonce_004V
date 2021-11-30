import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Se importan las bibliotecas para administrar storage de angular
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({//se deshabilita el efecto ripple en toda la aplicación y se fuerza al modo Material Desing
    rippleEffect:false,
    mode: 'md'
  }), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot({
    name: 'midb', //Nombre del storage físico. Veré este nombre al levantar el servidor
    driverOrder: [Drivers.IndexedDB,Drivers.LocalStorage]
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
