import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { PedidoData, Pedido } from '../../interface/pedido.interface';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
constructor(private adminservice:AdminService){}



Pedidos!:Pedido[] 

ngOnInit(): void {
  
this.adminservice.ordenes().subscribe((data)=>{

  this.Pedidos=data.data;


})

}
ConfirmarPedido(id:number){
this.adminservice.CompletarPedido(id).subscribe((data)=>{
console.log(data);
})

}

}
