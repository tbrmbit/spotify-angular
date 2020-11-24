import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopBarComponent
  ],
  providers: [
    TokenService
  ]
})
export class CoreModule { }
