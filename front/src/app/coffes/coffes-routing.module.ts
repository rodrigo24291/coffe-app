import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './layaout/layaout.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:"",
  component:LayaoutComponent,
  children:[
    {path:'producto',
    component:ProductoComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffesRoutingModule { }
