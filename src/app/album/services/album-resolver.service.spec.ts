import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { AlbumResolverService } from './album-resolver.service';

@Injectable()
class albumServiceStub {
    public getAlbum(): Observable<any> {
      return new Observable();
    }
}

describe('AlbumResolverService', () => {
  let service: AlbumResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: AlbumResolverService, useclass: albumServiceStub }
      ]
    });
    service = TestBed.inject(AlbumResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
