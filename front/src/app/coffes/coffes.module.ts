import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffesRoutingModule } from './coffes-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumenComponent } from './resumen/resumen.component';
import { LayaoutComponent } from './layaout/layaout.component';
import { ProductoComponent } from './producto/producto.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    LayaoutComponent,
    SidebarComponent,
    ResumenComponent,
    ProductoComponent,
    
  ],
  exports:[
    SidebarComponent,
    ResumenComponent,
    LayaoutComponent],
  imports: [
    CommonModule,
    CoffesRoutingModule,
    DialogModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class CoffesModule { }
