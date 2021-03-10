import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private PROFILE_URL = environment.api + 'me';

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    return this.http.get<any>(this.PROFILE_URL).pipe(
      map(res => res),
      catchError(this.handlerError)
    );
  }

  private handlerError(error: any): Promise<any> {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
