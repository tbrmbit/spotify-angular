import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightAlbumComponent } from './highlight-album.component';

describe('HighlightAlbumComponent', () => {
  let component: HighlightAlbumComponent;
  let fixture: ComponentFixture<HighlightAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
