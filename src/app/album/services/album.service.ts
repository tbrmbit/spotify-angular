import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(public http: HttpClient) { }

  public getAlbum(albumId: string): Observable<Album> {
    return this.http.get<any>(this.getAlbumUrl(albumId)).pipe(
      map(res => res as Album),
      catchError(this.handlerError)
    );
  }

  public handlerError(error: any): Promise<any> {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  private getAlbumUrl(albumId: string): string {
    return environment.api + `albums/${albumId}/tracks`;
  }
}
