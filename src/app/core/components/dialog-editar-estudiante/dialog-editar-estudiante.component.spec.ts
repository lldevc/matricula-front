import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DialogEditarEstudianteComponent } from './dialog-editar-estudiante.component';
import { UsuarioMatriculaService } from 'src/app/feature/usuarioMatricula/shared/usuarioMatricula.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DialogEditarEstudianteComponent', () => {
  let component: DialogEditarEstudianteComponent;
  let fixture: ComponentFixture<DialogEditarEstudianteComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditarEstudianteComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        UsuarioMatriculaService,
        { provide: MatDialogRef, useValue: {mockDialogRef}},
        { provide: MAT_DIALOG_DATA, useValue: {}},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar que el formulario es invalido sin un nombre', () => {
    const form = component.form
    form.controls['nombre'].setValue('');
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('Test');
    form.controls['direccion'].setValue('Test');
    expect(form.invalid).toBeTrue();
  })

  it('Deberia validar que el formulario es invalido sin email', () => {
    const form = component.form
    form.controls['nombre'].setValue('test');
    form.controls['email'].setValue('');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    expect(form.invalid).toBeTrue();
  })

  it('Deberia validar que el formulario es invalido sin ciudad', () => {
    const form = component.form
    form.controls['nombre'].setValue('test');
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('');
    form.controls['direccion'].setValue('test');
    expect(form.invalid).toBeTrue();
  })

  it('Deberia validar que el formulario es invalido sin direccion', () => {
    const form = component.form
    form.controls['nombre'].setValue('test');
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('');
    expect(form.invalid).toBeTrue();
  })

  it('Deberia validar que el formulario es valido', () => {
    const form = component.form
    form.controls['nombre'].setValue('test');
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    expect(form.valid).toBeTrue();
  })
});
