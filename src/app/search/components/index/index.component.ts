import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { map, debounceTime } from 'rxjs/operators';
import { Albums } from '../../models/album';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public profile$ = new Observable<Profile>();
  public searchInput = new FormControl();
  public albums = {} as Albums;
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
                          this.albums = result;
                        },
                        error => this.showLastSearch = false
                      )
                    );
  }

}
