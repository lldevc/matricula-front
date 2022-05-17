import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';

import { DialogPagarComponent } from './dialog-pagar.component';

describe('DialogPagarComponent', () => {
  let component: DialogPagarComponent;
  let fixture: ComponentFixture<DialogPagarComponent>;

  let location: Location;
  let router: Router;

  const routes = [
    {path: 'matricula/pagar-matricula/:id', component: {}}
  ] as Routes;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPagarComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(DialogPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar que el formulario es invalido', () => {
    const form = component.form;
    const id = form.controls.id;
    id.setValue('');
    expect(form.invalid).toBeTrue();
  });

  it('Deberia validar que el formulario es valido', () => {
    const form = component.form;
    const id = form.controls.id;
    id.setValue('1000');
    expect(form.valid).toBeTrue();
  });

  it('deberia navegar a pagar-matricula', fakeAsync(() => {
    router.initialNavigation();
    const form = component.form;
    const id = form.controls.id;
    id.setValue('1000');

    const btn = fixture.debugElement.query(By.css('button'));
    btn.nativeElement.click();
    router.navigate(['/matricula/pagar-matricula/1000']);

    tick();

    expect(router.url).toBe('/matricula/pagar-matricula/1000');
    expect(location.path()).toBe('/matricula/pagar-matricula/1000');
  }));

});
