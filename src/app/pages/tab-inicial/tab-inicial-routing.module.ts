import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children:[
      {
        path: 'cuenta-cliente',
        loadChildren: () => import('./../../pages/cuenta-cliente/cuenta-cliente.module').then( m => m.CuentaClientePageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('./../../pages/mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: 'prueba1',
          loadChildren: () => import('./../../pages/InicioReal/prueba1.module').then( m => m.Prueba1PageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./../../pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
