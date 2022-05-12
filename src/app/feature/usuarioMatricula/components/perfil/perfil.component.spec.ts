import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatriculaService } from 'src/app/feature/matricula/shared/service/matricula.service';

import { PerfilComponent } from './perfil.component';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Matricula } from '../../../matricula/shared/model/Matricula';
import { Programa } from '@programa/shared/model/programa';
import { UsuarioMatricula } from '../../shared/model/usuarioMatricula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let matriculaService: MatriculaService;

  let listaMatriculasPorUsuario: Matricula[] = [
    new Matricula(
      1000, 
      700000.0,
       false, 
       'PENDIENTE',
        new Date('2022-04-01'),
        new Date('2022-04-08'), 
        new Date('2022-04-17'),
        new Programa(1, 'Ingles', 700000, 0.2, 5),
        new UsuarioMatricula (1, 1111, 'test', 'test@test.com', 'test', 'test')
    ),
    new Matricula(
      1001, 
      700000.0,
       false, 
       'PENDIENTE',
        new Date('2022-04-01'),
        new Date('2022-04-12'), 
        new Date('2022-04-19'),
        new Programa(2, 'Frances', 850000, 0.2, 7),
        new UsuarioMatricula (1, 1111, 'test', 'test@test.com', 'test', 'test')
    )
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [ 
        MatriculaService, 
        HttpService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: '1111',
            }),
          },
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    matriculaService = TestBed.inject(MatriculaService);
    spyOn(matriculaService, 'consultarPorIdentificacionDeUsuario').and.returnValue(
      of(listaMatriculasPorUsuario)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    expect(component.idUrl).toEqual('1111')
    matriculaService.consultarPorIdentificacionDeUsuario(component.idUrl).subscribe(resultado => {
        expect(2).toBe(resultado.length)
      });
  });

  it('Deberia abrir el componende de dialgo de editar usuario', () => {
    component.openDialogEditarEstudiante();
    fixture.detectChanges()
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Buscar estudiante');
  });

});
