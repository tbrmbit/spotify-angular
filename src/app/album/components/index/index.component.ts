import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../../models/album';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public album$: Observable<Album> | undefined;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.album$ = this.route.data.pipe(map((data: any) => {
      return data.albumId as Album;
    }));
  }
}
