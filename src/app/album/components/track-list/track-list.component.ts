import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() trackList = [];

  constructor() { }

  ngOnInit(): void {
  }

}
