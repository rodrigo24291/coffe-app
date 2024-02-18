import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoffeService } from '../coffe.service';
import { ProductosSelectItem } from '../interface/productoSelect.interface';
import { MessageService } from 'primeng/api';
import { ResponsePedido } from '../interface/pedido.interface';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
constructor(private coffeservice:CoffeService,
            private messageService: MessageService){
}

@Input() ProductoSelect:ProductosSelectItem[]=[];
@Output() EliminarProducto:EventEmitter<number>=new EventEmitter();
@Input() TotalGastos:number=0; 
pedidos!:ResponsePedido;

showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Producto eliminado' });
  }

eliminar(id:number):void{
  console.log(this.coffeservice.ProductosSelect);
  this.EliminarProducto.emit(id);
  this.showError();
  }

editar(id:number):void{
  this.coffeservice.productoEliminado.emit(id);
  }

  pedido(event:Event){
    event.preventDefault();
    this.pedidos={
      Pedido:{
        Total:this.coffeservice.TotalGastos,
        Estado:1
      },
      Producto:this.ProductoSelect
    }
    console.log(this.pedidos);
    
    const token = localStorage.getItem('token');
    if (token) {
      
      
      const headers = new  HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    this.coffeservice.pedidos(this.pedidos,headers).subscribe((resp)=>console.log(resp))}
  }

}
