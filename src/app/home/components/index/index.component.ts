import { ProfileService } from '../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public profile$!: Observable<Object>;
  public auth$!: Observable<Object>;

  constructor(private profileService: ProfileService, private auth: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
    this.auth.authorizedStream.subscribe((data) => {
      console.log(data);
    });
  }

  public onClickLogin(): void {
    this.auth.authorize();
  }

}
