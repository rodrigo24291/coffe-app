import { Component, OnInit } from '@angular/core';
import { CoffeService } from 'src/app/coffes/coffe.service';
import { HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/coffes/interface/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(private coffeservice:CoffeService){}

  Productos!:Producto[]

  ngOnInit(): void {
    const token=localStorage.getItem('token');
  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    
  this.coffeservice.productos(headers).subscribe(productos=>{
      this.Productos=productos.data
  })
  }
 
  CambiarDisponibilidad(number:number){
    const token=localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.coffeservice.disponibilidad(number,headers).subscribe(producto=>console.log(producto)
    );
    
  } 
}