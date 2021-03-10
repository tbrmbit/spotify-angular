import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { Albums } from '../models/album';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAlbum should return Observable from Album', fakeAsync((done: DoneFn) => {
    let expectativeAlbums: Albums;

    service.getAlbum('emicida').subscribe(data => {
      tick(2);
      expect(data).toBe(expectativeAlbums);
      done();
    });
  }));
});
