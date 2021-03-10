import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { AlbumService } from './album.service';
import { Album } from '../models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverService implements Resolve<Album>{

  constructor(private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> {
    const albumId = route.paramMap.get('id') || '';
    return this.albumService.getAlbum(albumId);
  }
}
