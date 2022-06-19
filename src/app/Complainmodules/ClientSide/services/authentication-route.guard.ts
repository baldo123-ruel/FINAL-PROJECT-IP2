import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastServiceService } from './toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRouteGuard implements CanActivate {

  constructor(public route: Router, private toast: ToastServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('CurrentUser')) {
       
       return true;
    }
    this.toast.getWarning("Login First", "Feel free to login");
    this.route.navigate(['/'],{queryParams: { returnUrl: state.url} });
    return true;
  }

  
}
