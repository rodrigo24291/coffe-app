import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesComponent } from './page/ordenes/ordenes.component';
import { ProductosComponent } from './page/productos/productos.component';
import { LayaoutComponent } from './layaout/layaout.component';

const routes: Routes = [
  {
    path:'',
    component:LayaoutComponent,
    children:[{
      path:'ordenes',
      component:OrdenesComponent
    },
    {
      path:'productos',
      component:ProductosComponent
    },
    {
      path:'**',
      redirectTo:'ordenes'
    }
  ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
