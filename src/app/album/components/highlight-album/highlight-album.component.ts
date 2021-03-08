import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'highlight-album',
  templateUrl: './highlight-album.component.html',
  styleUrls: ['./highlight-album.component.scss']
})
export class HighlightAlbumComponent implements OnInit {
  @Input() artist = '';
  @Input() albumName = '';
  @Input() albumThumb = '';

  constructor() { }

  ngOnInit(): void {
  }

}
