import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  public canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(next, state);
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const response = this.extractApiResponse(next.fragment);
    if (response) {
      return !!response;
    }
    return !response;
  }

  private extractApiResponse(fragment: string): null {
    console.log(fragment);
    if (!!fragment) {
      console.log(fragment.split('&').map((s) => s.split('=')));
    }
    return null;
  }
}
