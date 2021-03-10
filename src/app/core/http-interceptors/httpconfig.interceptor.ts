import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private CLIENT_ID = '5e9152447ca9486e91697ad5696d8cea';
  private SECRET_KEY = '6fe514ead0c04274a7c06f6d86fc3a41';

  constructor(private tokenService: TokenService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.oAuthToken;
    const encoded = (btoa(this.CLIENT_ID + ':' + this.SECRET_KEY));

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', this.tokenService.authHeader.Authorization) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      catchError (err => {
        if (err.status === 401) {
          this.tokenService.clearToken();
          this.router.navigate(['/home']);
        }
        return throwError(err);
      })
    );
  }
}
