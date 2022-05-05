import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from '../solicitud/solicitud.component';




@NgModule({
  declarations: [SolicitudComponent],
  exports: [SolicitudComponent],
  imports: [
    CommonModule
  ]
})
export class SolicitudModuleModule { }
