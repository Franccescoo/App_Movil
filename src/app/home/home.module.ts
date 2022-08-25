import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CuentaClienteComponent } from '../components/cuenta-cliente/cuenta-cliente.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { MapaComponent } from '../components/mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, InicioComponent,CuentaClienteComponent,MapaComponent]
})
export class HomePageModule {}
