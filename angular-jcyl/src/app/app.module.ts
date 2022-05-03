import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { FilaPaginadorComponent } from './fila-paginador/fila-paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    PaginadorComponent,
    FilaPaginadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
