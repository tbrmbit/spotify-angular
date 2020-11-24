import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN = '';
  private token$ = new BehaviorSubject(this.TOKEN);

  constructor() { }

  public get oAuthToken(): string {
    return this.TOKEN;
  }

  public clearToken(): void {
    this.TOKEN = '';
    this.token$.next(this.TOKEN);
  }

  public get authHeader(): { [name: string]: string } {
    return this.TOKEN ? { Authorization: `Bearer ${this.TOKEN}` } : {};
  }

  public get authTokens(): Observable<string> {
    return this.token$.asObservable();
  }

  public setAuthToken(accessToken: any): boolean {
    this.TOKEN = accessToken || '';
    this.token$.next(this.TOKEN);
    return !!this.TOKEN;
  }
}
