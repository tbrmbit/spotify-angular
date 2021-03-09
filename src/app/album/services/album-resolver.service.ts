import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { AlbumService } from './album.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverService implements Resolve<any>{

  constructor(private router: Router, private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const albumId = route.paramMap.get('id') || '';

    return this.albumService.getAlbum(albumId).subscribe(
      res => res,
      error => {
        this.router.navigate(['/search']);
        return error;
      }
    );
  }
}
