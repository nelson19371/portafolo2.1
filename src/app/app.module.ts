import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaModule } from './components/portada/portada.module';
import { SobreMiModule } from './components/sobre-mi/sobre-mi.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortadaModule,
    SobreMiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
