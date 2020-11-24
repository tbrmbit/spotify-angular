import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private refreshToken = false;
  private TOKEN_URL = environment.api + 'token';
  private CLIENT_ID = '5e9152447ca9486e91697ad5696d8cea';
  private SECRET_KEY = '6fe514ead0c04274a7c06f6d86fc3a41';

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.token;
    const encoded = (btoa(this.CLIENT_ID + ':' + this.SECRET_KEY));

    if (token && !this.refreshToken) {
      //request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    } else {
     /*  request = request.clone({
        headers: request.headers.set('Authorization', 'Basic ' + encoded)
      }); */
    }

    if (!request.headers.has('Content-Type')) {
      //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    //request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      catchError (err => {
        return throwError(err);
      })
    );
  }

  get token(): string {
    const token = localStorage.getItem('token') || '';
    return token;
  }

  public setToken(tk: string): void {
    localStorage.setItem('token', tk);
  }
}
