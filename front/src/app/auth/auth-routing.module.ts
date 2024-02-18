import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautComponent } from './component/layaut/layaut.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [

 {
  path:'',
  component:LayautComponent,
  children:[
    {path:"login",
    component:LoginComponent
    },
    {
      path:"registro",
      component:RegisterComponent
    }
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
