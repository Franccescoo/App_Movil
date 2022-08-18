import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeClientePageRoutingModule } from './viaje-cliente-routing.module';

import { ViajeClientePage } from './viaje-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeClientePageRoutingModule
  ],
  declarations: [ViajeClientePage]
})
export class ViajeClientePageModule {}
