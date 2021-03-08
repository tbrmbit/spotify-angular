import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private URL_ALBUM = 'https://api.spotify.com/v1/albums/{id}/tracks';
  constructor() { }
}
