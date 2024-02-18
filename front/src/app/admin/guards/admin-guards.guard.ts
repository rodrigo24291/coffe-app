import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})



export class AdminGuardsGuard implements CanActivate, CanMatch {
  constructor(private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean  {
    return this.auth.checkauth();
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {
    return this.auth.checkauth();
  }
}
