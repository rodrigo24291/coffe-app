import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private authService:AuthService,private fb:FormBuilder,private router:Router){
}

Formlogin:FormGroup=this.fb.group({
  email:["",[Validators.email,Validators.required]],
  password:["",[Validators.required]]
})

Invalied(field:string):boolean | null{
  return this.Formlogin.controls[field].errors && this.Formlogin.controls[field].touched
  }


login(){
  console.log('hola');
  
  if(this.Formlogin.invalid){
this.Formlogin.markAllAsTouched()

return;
}

this.authService.login(this.Formlogin.value).subscribe((valor)=>{
  this.router.navigate(["/coffe"])
});


}

}
