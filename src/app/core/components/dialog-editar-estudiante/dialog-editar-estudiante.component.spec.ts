import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DialogEditarEstudianteComponent } from './dialog-editar-estudiante.component';
import { UsuarioMatriculaService } from 'src/app/feature/usuarioMatricula/shared/usuarioMatricula.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioMatricula } from '../../../feature/usuarioMatricula/shared/model/usuarioMatricula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditarEstudianteComponent', () => {
  let component: DialogEditarEstudianteComponent;
  let fixture: ComponentFixture<DialogEditarEstudianteComponent>;

  let service: UsuarioMatriculaService;
  let httpMock: HttpTestingController;

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
        HttpClientTestingModule,
        BrowserAnimationsModule
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
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioMatriculaService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioMatriculaService);
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

  it('Debe crearse correctamente el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar null y hacer peticion al metodo PUT', () => {
    
    const mockUsuarioMatricula: UsuarioMatricula = {
      id: 1,
      numeroIdentificacion: 11,
      nombre: 'test',
      email: 'test@test.com',
      ciudad: 'test',
      direccion: 'test'
    }

    service.actualizarDatos(mockUsuarioMatricula).subscribe( (res) => {
      expect(res).toBeNull()
    });
    const req = httpMock.expectOne('/inscripcion-ms/usuarios-matricula/1');
    expect(req.request.method).toBe('PUT');
  });
});
