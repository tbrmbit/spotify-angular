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
    const lsToken = this.tokenService.oAuthToken;
    if (response) {
      this.setAuthToken(response[0][1]);
      return !!response;
    } else if (lsToken) {
      this.setAuthToken(lsToken);
    }
    return !response;
  }

  private setAuthToken(token: string): void {
    this.tokenService.setAuthToken(token);
    this.authService.authorized();
  }

  private extractApiResponse(fragment: string): Array<string[]> | null {
    return !!fragment ? fragment.split('&').map((s) => s.split('=')) : null;
  }
}
