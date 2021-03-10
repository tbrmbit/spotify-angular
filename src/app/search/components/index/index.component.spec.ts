import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Album } from 'src/app/album/models/album';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import { SearchService } from '../../services/search.service';

import { IndexComponent } from './index.component';
import { Albums } from '../../models/album';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  @Injectable()
  class profileServiceStub extends ProfileService {
    public getProfile(): Observable<Profile> {
      let profile: Profile;
      return new Observable(observer => {
        observer.next(profile);
      });
    }
  }

  @Injectable()
  class searchServiceStub extends ProfileService {
    public getAlbum(): Observable<Albums> {
      let albums: Albums;
      return new Observable(observer => {
        observer.next(albums);
      });
    }
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      declarations: [ IndexComponent ],
      providers: [
        { provide: ProfileService, useClass: profileServiceStub },
        { provide: SearchService, useClass: searchServiceStub },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getProfile should show after component initialized', () => {
    const profileService = fixture.debugElement.injector.get(ProfileService);
    spyOn(profileService, 'getProfile');
    component.ngOnInit();
    expect(profileService.getProfile).toHaveBeenCalled();
  });

  it('#searchInput need to call getAlbum', fakeAsync(() => {
    const searchService = fixture.debugElement.injector.get(SearchService);
    spyOn(searchService, 'getAlbum').and.returnValue(new Observable());
    component.ngOnInit();
    component.searchInput.setValue('emicida');
    component.searchInput.updateValueAndValidity({ emitEvent: true });
    tick(1000);
    expect(searchService.getAlbum).toHaveBeenCalled();
  }));

  it('#searchInput value should be equal input', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.search__search-bar');
    component.searchInput.setValue('emicida');
    expect(el.value).toBe('emicida');
  });

});
