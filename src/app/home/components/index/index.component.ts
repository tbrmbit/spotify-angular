import { ProfileService } from '../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public profile$!: Observable<Object>;
  public auth$!: Observable<Object>;

  constructor(private profileService: ProfileService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('HOME');
    this.profile$ = this.profileService.getProfile();
    this.auth.authorizedStream.subscribe((data) => {
      console.log(data, 'HERE');
      if (data) {
        this.router.navigate(['/search']);
      }
    });
  }

  public onClickLogin(): void {
    this.auth.authorize();
  }

}
