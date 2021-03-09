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

  msToMinutesAndSeconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000);
    return `${minutes}:${(seconds <= 9 ? '0' : '')}${seconds.toFixed(0)}`;
  }

}
