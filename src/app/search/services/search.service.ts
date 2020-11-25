import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Albums } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private SEARCH_URL = environment.api + 'search';
  private SEARCH_TYPE = 'album';
  private PROFILE_URL = environment.api + 'me';

  constructor(public http: HttpClient) { }

  public getAlbum(albumName: string): Observable<Albums> {
    let params = new HttpParams();
    params = params.append('q', albumName);
    params = params.append('type', this.SEARCH_TYPE);
    params = params.append('limit', '10');

    return this.http.get<any>(this.SEARCH_URL, { params });
   }
}
