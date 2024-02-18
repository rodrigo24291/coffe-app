import { Component, OnInit } from '@angular/core';
import { CoffeService } from '../coffe.service';
import { Producto } from '../interface/producto.interface';
import { Categoria } from '../interface/categoria.interface'
import { ProductosSelectItem } from '../interface/productoSelect.interface'
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent implements OnInit {

  Productos!:Producto[];
  
  categorias!: Categoria[];
  ProductosSelect: ProductosSelectItem[] = [];
  totalgasto:number=0;



  constructor(private coffeService:CoffeService) {
    
  }

  
  ngOnInit(): void {
    
    const token = localStorage.getItem('token');
    if (token) {
      
      
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.coffeService.productos(headers).subscribe((producto) => {
       
        this.Productos = producto.data.filter(producto=>producto.disponible==1)
      });
  
      this.coffeService.categoria( headers ).subscribe((categori) => {
        this.categorias = categori.data;
      });
      
    }
  }

CategoriaElegida(id:number):void{
  
this.Productos=this.coffeService.Productoss.filter(producto=>producto.categoria_id===id);
}

select(producto:number){
  
  
this.ProductosSelect=this.coffeService.ProductosSelect;
this.totalgasto=this.coffeService.TotalGastos;
}

eliminarproducto(id:number){
  console.log(id);

  const productoEliminado = this.coffeService.ProductosSelect.find(item => item.productos.id === id);
  
  if (productoEliminado) {
    this.totalgasto -= (productoEliminado.cantidad * productoEliminado.productos.precio);
    
    this.ProductosSelect = this.coffeService.ProductosSelect.filter(producto => producto.productos.id !== id);
    this.coffeService.ProductosSelect = this.ProductosSelect;
    
    console.log(this.coffeService.TotalGastos);
  }


  this.ProductosSelect=this.coffeService.ProductosSelect.filter(producto=>producto.productos.id!==id);
  this.coffeService.ProductosSelect=this.ProductosSelect



}



}
