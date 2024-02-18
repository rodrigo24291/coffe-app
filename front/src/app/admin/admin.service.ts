import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PedidoData } from './interface/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

ordenes():Observable<PedidoData>{
  const token=localStorage.getItem('token');
  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
return this.http.get<PedidoData>('http://127.0.0.1:8000/api/pedido',{headers:headers});
}

CompletarPedido(id:number):Observable<PedidoData>{
  const token=localStorage.getItem('token');
  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  console.log(token, headers)
return this.http.put<PedidoData>(`http://127.0.0.1:8000/api/pedido`,{id},{headers:headers});

}

logout(headers:HttpHeaders):Observable<any>{
  return this.http.get<any>(`http://127.0.0.1:8000/api/logout`,{headers:headers}).pipe(tap(log=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token')
  }));
 }

}
