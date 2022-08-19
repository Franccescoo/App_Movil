import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 {
  path: 'prueba1',
    loadChildren: () => import('./pages/InicioReal/prueba1.module').then( m => m.Prueba1PageModule)
  },
  {
    path: 'cuenta-cliente',
    loadChildren: () => import('./pages/cuenta-cliente/cuenta-cliente.module').then( m => m.CuentaClientePageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./pages/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'modificar-perfil',
    loadChildren: () => import('./pages/modificar-perfil/modificar-perfil.module').then( m => m.ModificarPerfilPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },  {
    path: 'login-conductor',
    loadChildren: () => import('./pages/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'menu-conductor',
    loadChildren: () => import('./pages/menu-conductor/menu-conductor.module').then( m => m.MenuConductorPageModule)
  },
  {
    path: 'pago-cliente',
    loadChildren: () => import('./pages/pago-cliente/pago-cliente.module').then( m => m.PagoClientePageModule)
  },
  {
    path: 'viaje-cliente',
    loadChildren: () => import('./pages/viaje-cliente/viaje-cliente.module').then( m => m.ViajeClientePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
