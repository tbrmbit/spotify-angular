import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AlbumResolverService } from './services/album-resolver.service';

const routes: Routes = [{
  path: 'album/:id',
  component: IndexComponent,
  resolve: {
    albumId: AlbumResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
