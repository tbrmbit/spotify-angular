import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/album';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() trackList: Array<Track> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
