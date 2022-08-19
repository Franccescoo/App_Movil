import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeClientePage } from './viaje-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeClientePageRoutingModule {}
