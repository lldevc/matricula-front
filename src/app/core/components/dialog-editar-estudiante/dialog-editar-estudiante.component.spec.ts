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
});
