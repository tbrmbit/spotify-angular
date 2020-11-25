import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public profile$ = new Observable();
  public searchInput = new FormControl();
  public albums = [];
  public showLastSearch = true;

  constructor(private profileService: ProfileService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
    this.searchInput.valueChanges
                    .pipe(debounceTime(500))
                    .subscribe(
                      searchInput => this.searchService.getAlbum(searchInput).subscribe(
                        result => {
                          this.showLastSearch = true;
                          this.albums = result.albums.items;
                        },
                        error => this.showLastSearch = false
                      )
                    );
  }

}
