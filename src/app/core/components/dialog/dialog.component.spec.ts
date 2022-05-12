import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DialogComponent } from './dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let location: Location
  let router: Router

  const routes = [
    {path: 'home', component: {}}
  ] as Routes;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [ 
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia navegar a home', fakeAsync(() => {
    router.initialNavigation();
    let btn = fixture.debugElement.query(By.css('#btn'));
    btn.nativeElement.click();
    router.navigate(['/home']);
    tick();
    expect(router.url).toBe(`/home`)
    expect(location.path()).toBe('/home');
  }));
});
