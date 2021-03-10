import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../environments/environment';

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    });

    authService = new AuthService();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#authorizedStream should return boolean from observable', (done: DoneFn) => {
    component.ngOnInit();
    authService.authorizedStream.subscribe(value => {
      expect(value).toBe(false);
      done();
    });
  });

  it('#onClickLogin should redirect to spotify login page', fakeAsync(() => {
    spyOn(component, 'onClickLogin');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onClickLogin).toHaveBeenCalled();
  }));
});
