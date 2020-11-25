import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../home/services/auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  public canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(next, state);
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const response = this.extractApiResponse(next.fragment);
    const lsToken = localStorage.getItem('@token');
    if (response) {
      this.tokenService.setAuthToken(response[0][1]);
      this.authService.authorized();
      return !!response;
    } else if (lsToken) {
      this.tokenService.setAuthToken(lsToken);
      this.authService.authorized();
    }
    return !response;
  }

  private extractApiResponse(fragment: string): Array<string[]> | null {
    if (!!fragment) {
      return fragment.split('&').map((s) => s.split('='));
    }
    return null;
  }
}
