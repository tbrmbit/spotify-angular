import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchService } from './services/search.service';


@NgModule({
  declarations: [IndexComponent, ProfileComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileService,
    SearchService
  ]
})
export class SearchModule { }
