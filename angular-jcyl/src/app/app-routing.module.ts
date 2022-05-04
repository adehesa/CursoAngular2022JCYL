import { CentrosComponent } from './centros/centros.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: 'solicitud', component: SolicitudComponent},
	{path: 'centros', component: CentrosComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
