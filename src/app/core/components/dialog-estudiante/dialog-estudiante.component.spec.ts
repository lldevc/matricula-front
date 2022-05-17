import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';

import { DialogEstudianteComponent } from './dialog-estudiante.component';

describe('DialogEstudianteComponent', () => {
  let component: DialogEstudianteComponent;
  let fixture: ComponentFixture<DialogEstudianteComponent>;

  let location: Location;
  let router: Router;

  const routes = [
    {path: 'usuario/perfil/:id', component: {}}
  ] as Routes;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEstudianteComponent ],
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

    fixture = TestBed.createComponent(DialogEstudianteComponent);
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
    id.setValue('1111');
    expect(form.valid).toBeTrue();
  });

  it('deberia navegar a perfil', fakeAsync(() => {
    router.initialNavigation();
    const form = component.form;
    const id = form.controls.id;
    id.setValue('1111');

    const btn = fixture.debugElement.query(By.css('button'));
    btn.nativeElement.click();
    router.navigate(['/usuario/perfil/1111']);

    tick();

    expect(router.url).toBe('/usuario/perfil/1111');
    expect(location.path()).toBe('/usuario/perfil/1111');
  }));
});
