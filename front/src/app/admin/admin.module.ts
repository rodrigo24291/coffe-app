import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayaoutComponent } from './layaout/layaout.component';
import { OrdenesComponent } from './page/ordenes/ordenes.component';
import { ProductosComponent } from './page/productos/productos.component';
import { AdminRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    LayaoutComponent,
    OrdenesComponent,
    ProductosComponent
  ],
  exports: [
    LayaoutComponent,
    OrdenesComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
