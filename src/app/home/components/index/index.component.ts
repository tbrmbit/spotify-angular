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
  public auth$!: Observable<{}>;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.auth.authorizedStream.subscribe((data) => {
      if (data) {
        this.router.navigate(['/search']);
      }
    });
  }

  public onClickLogin(): void {
    this.auth.authorize();
  }

}
