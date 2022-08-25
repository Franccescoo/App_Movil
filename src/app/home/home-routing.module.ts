import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaClienteComponent } from '../components/cuenta-cliente/cuenta-cliente.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'inicio',
        component: InicioComponent
      },
      {
        path:'mapa',
        component: MapaComponent
      },
      {
        path: 'cuenta-cliente',
        component: CuentaClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
