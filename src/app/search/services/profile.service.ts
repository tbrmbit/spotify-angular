import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private PROFILE_URL = environment.api + 'me';
  private SECRET_KEY = '6fe514ead0c04274a7c06f6d86fc3a41';

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    return this.http.get<any>(this.PROFILE_URL).pipe(
      map(res => res)
    );
  }

  public handlerError(error: any): Promise<any> {
    console.log(error.message || error);
    return Promise.reject(error.message || error);
  }
}
