import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/services/auth.guard';
import { IndexComponent } from './components/index/index.component';
import { LoggedUserGuard } from '../core/services/logged-user.guard';

const routes: Routes = [{ path: '', canActivate: [LoggedUserGuard], component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
