import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent {
  constructor(private adminservice:AdminService){}
  cerrarcesion(){
    
    const token=localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
this.adminservice.logout(headers).subscribe(log=>console.log(log)
)
  }
}
