import { TestBed } from '@angular/core/testing';

import { AlbumResolverService } from './album-resolver.service';

describe('AlbumResolverService', () => {
  let service: AlbumResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
