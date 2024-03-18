import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { CognitoService } from '../services/cognito.service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnGuardService{

  constructor(private cognitoService: CognitoService, private router: Router) {}

  canActivate: CanActivateFn = (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    if(!this.cognitoService.isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/features/upload-image']);
      return false;
    }
  };
}