import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { PagarMatriculaComponent } from './pagar-matricula.component';
import { MatriculaService } from 'src/app/feature/matricula/shared/service/matricula.service';
import { HttpService } from '@core/services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Matricula } from '../../shared/model/Matricula';
import { Programa } from '@programa/shared/model/programa';
import { UsuarioMatricula } from 'src/app/feature/usuarioMatricula/shared/model/usuarioMatricula';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatriculaPagarRequest } from '../../shared/model/MatriculaPagarRequest';

describe('PagarMatriculaComponent', () => {
  let component: PagarMatriculaComponent;
  let fixture: ComponentFixture<PagarMatriculaComponent>;
  let matriculaService: MatriculaService;
  let httpMock: HttpTestingController;

  const dummyMatricula = new Matricula(
    1000,
    700000.0,
    false,
    'PENDIENTE',
    new Date('2022-04-01'),
    new Date('2022-04-08'),
    new Date('2022-04-17'),
    new Programa(1, 'Ingles', 700000, 0.2, 5),
    new UsuarioMatricula(1, 1111, 'test', 'test@test.com', 'test', 'test')
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarMatriculaComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        MatriculaService,
        HttpService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: '1000',
            }),
          },
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatriculaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarMatriculaComponent);
    component = fixture.componentInstance;
    matriculaService = TestBed.inject(MatriculaService);
    spyOn(matriculaService, 'consultarPorId').and.returnValue(
      of(dummyMatricula)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    expect(component.idUrl).toEqual('1000');
    matriculaService.consultarPorId(component.idUrl).subscribe(resultado => {
        expect(resultado).toEqual(dummyMatricula);
      });
  });

  it('Debe pagar  la matricula al enviar la tarjeta de credito y abrir dialogo de exito', fakeAsync(() => {
    (document.getElementById('card') as HTMLInputElement).value = '1111222233334444';
    (document.getElementById('anio') as HTMLInputElement).value = '2050';
    (document.getElementById('mes') as HTMLInputElement).value = '12';
    (document.getElementById('cvv') as HTMLInputElement).value = '123';

    document.getElementById('btn-pagar').click();

    component.openDialog();
    fixture.detectChanges();
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Pago Exitoso');
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/pagar/1000');
    expect(req.request.method).toBe('PUT');

  }));

  it('Se debe ejecutar el metodo pagar()', fakeAsync(() => {
    component.pagar();
    component.openDialog();
    fixture.detectChanges();
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Pago Exitoso');
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/pagar/1000');
    expect(req.request.method).toBe('PUT');
  }));

  it('Se debe ejecutar el metodo pagar matricula', fakeAsync(() => {
    const dummyMatriculaPagarRequest: MatriculaPagarRequest = {
      id: 1000,
      valor: 700000.0,
      recargo: false,
      estadoDePago: 'PENDIENTE',
      fechaCreacion: new Date('2022-04-01'),
      fechaLimitePagoSinRecargo: new Date('2022-04-08'),
      fechaMaximaPago: new Date('2022-04-17'),
      programa: new Programa(1, 'Ingles', 700000, 0.2, 5),
      usuarioMatricula: new UsuarioMatricula(1, 1111, 'test', 'test@test.com', 'test', 'test'),
      medioDePago: {
        numeroTarjeta: '1111222233334444',
        anioVecimiento: '2050',
        mesVecimiento: '12',
        codigoSeguridad: '123'
      }
    };

    matriculaService.pagar(dummyMatriculaPagarRequest).subscribe((res) => {
      expect(res).toBeNull();
      component.openDialog();
      fixture.detectChanges();
      const dialgoEditarUsuario = document.getElementById('titulo');
      expect(dialgoEditarUsuario.innerText).toEqual('Pago Exitoso');
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas/pagar/1000');
    expect(req.request.method).toBe('PUT');
  }));


});
