import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [IndexComponent, ProfileComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  providers: [
    ProfileService
  ]
})
export class SearchModule { }
