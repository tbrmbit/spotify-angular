import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/services/auth.guard';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [{ path: '', canActivate: [AuthGuard], component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
