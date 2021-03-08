import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { IndexComponent } from './components/index/index.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { HighlightAlbumComponent } from './components/highlight-album/highlight-album.component';


@NgModule({
  declarations: [IndexComponent, TrackListComponent, HighlightAlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
