import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Categoria } from '../interface/categoria.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { User, UserClass } from '../interface/usuario.interface';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
constructor(private authservice:AuthService, private router:Router){

}
usuario:string | undefined | null;

ngOnInit(): void {
  
this.usuario=localStorage.getItem('user') ; 
}



  @Input() categorias!:Categoria[];

  @Output() categorySelection: EventEmitter <number>  = new EventEmitter(); 

CategoriaId(id:number):void{
  console.log(id);
  
  
this.categorySelection.emit(id);
}

logout(){
  const token=localStorage.getItem('token');
if(token){  
  
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  this.authservice.logout(headers).subscribe(
    (valor)=>{
      this.router.navigate(['auth','login']);
    }
  )
}}
}
