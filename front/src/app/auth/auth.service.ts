import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserClass } from '../coffes/interface/usuario.interface';
import { Observable, tap,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
user!:User

  registro(user:UserClass):Observable<User>{
    
    return  this.http.post<User>(`http://127.0.0.1:8000/api/registro`,user).
    pipe(
      tap(toke=>localStorage.setItem('token',toke.token)),
      tap(name=>localStorage.setItem('user',name.user.name)),
      tap(user=>this.user=user)
    )
   }

   login(user:any):Observable<User>{
    return this.http.post<User>(`http://127.0.0.1:8000/api/login`,user).
    pipe(
      tap(toke=>localStorage.setItem('token',toke.token)),
      tap(name=>localStorage.setItem('user',name.user.name))
    )
   }

   logout(headers:HttpHeaders):Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:8000/api/logout`,{headers:headers}).pipe(tap(log=>{
      localStorage.removeItem('user');
      localStorage.removeItem('token')
    }));
   }

   
checkauth(): Observable<boolean> | boolean {
  if(!localStorage.getItem('token'))return false;
const token=localStorage.getItem('token');

const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

return this.http.get<UserClass>('http://127.0.0.1:8000/api/user',{headers:headers}).pipe(
map((da:UserClass)=>{
  console.log(da);
  
  if(da.admin==1){
    
    return true
  }
  return false
}),
tap(user=>console.log(user)
)  
)
}
}
