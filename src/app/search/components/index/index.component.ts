import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public profile$ = new Observable();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
  }


}
