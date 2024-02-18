import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable,tap,BehaviorSubject } from 'rxjs';
import { Categoria, CategoriaResponse } from './interface/categoria.interface';
import { ProductoResponse } from './interface/producto.interface';
import { Producto } from './interface/producto.interface';
import { ProductosSelectItem } from './interface/productoSelect.interface';
import { ResponsePedido } from './interface/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {
 

  constructor(private http:HttpClient) { }
  Productoss!:Producto[];
  ProductosSelect: ProductosSelectItem[] = [];
  productoEliminado: EventEmitter<number> = new EventEmitter<number>();
  TotalGastos:number=0

  
  categoria(headers:HttpHeaders):Observable<CategoriaResponse>{
    
    
    return this.http.get<CategoriaResponse>(`http://127.0.0.1:8000/api/categoria/`,{headers:headers})
  }

  productoid(id:number):Observable<ProductoResponse>{
    return this.http.get<ProductoResponse>(`http://127.0.0.1:8000/api/producto/${id}`)
  }
  productos(headers:HttpHeaders):Observable<ProductoResponse>{
    return this.http.get<ProductoResponse>(`http://127.0.0.1:8000/api/producto/`,{headers:headers}).pipe(tap(
    producto=>{
      this.Productoss=producto.data
    }
    ))
  }

  pedidos(pedido:ResponsePedido,headers:HttpHeaders):Observable<ResponsePedido>{

      return this.http.post<ResponsePedido>(`http://127.0.0.1:8000/api/pedido/`,pedido,{headers:headers})
  }

  disponibilidad(id:number,headers:HttpHeaders):Observable<Producto>{

    return this.http.post<Producto>(`http://127.0.0.1:8000/api/pedido/`,{id},{headers:headers})
}

}
