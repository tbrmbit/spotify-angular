import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private authorized$ = new BehaviorSubject<boolean>(false);
  private CLIENT_ID = '5e9152447ca9486e91697ad5696d8cea';
  private RESPONSE_TYPE = 'token';
  private REDIRECT_URI = 'http://localhost:4200/';

  public authorize(): void {
    window.location.href = `${environment.authorize}?client_id=${this.CLIENT_ID}&response_type=${this.RESPONSE_TYPE}&redirect_uri=${this.REDIRECT_URI}`;
  }

  public authorized(): void {
    this.authorized$.next(true);
  }

  public get authorizedStream(): Observable<boolean> {
    return this.authorized$.asObservable();
  }

}
