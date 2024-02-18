import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';
import { AdminGuardsGuard } from './admin/guards/admin-guards.guard';

const routes: Routes = [

  {path:"auth",
  loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"coffe",
    loadChildren:()=>import('./coffes/coffes.module').then(m=>m.CoffesModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AdminGuardsGuard],
    canMatch:[AdminGuardsGuard]
  },
  {
    path:'**',
    component:Error404Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
