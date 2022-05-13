import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MatricularComponent } from './matricular.component';
import { MatriculaService } from 'src/app/feature/matricula/shared/service/matricula.service';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramaService } from '@programa/shared/service/programa.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Programa } from '@programa/shared/model/programa';
import { of } from 'rxjs';
import { MatriculaCrearRequest } from '../../shared/model/MatriculaCrearRequest';
import { MatriculaCrearResponse } from '../../shared/model/MatriculaCrearResponse';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('MatricularComponent', () => {
  let component: MatricularComponent;
  let fixture: ComponentFixture<MatricularComponent>;
  let matriculaService: MatriculaService;
  let programaService: ProgramaService;
  let httpMock: HttpTestingController;

  let location: Location
  let router: Router

  const routes = [
    { path: 'matricula/ver-matricula/:id', component: {} }
  ] as Routes;


  const dummyProgramas = [
    new Programa(1, 'Ingles', 700000, 0.2, 5), new Programa(2, 'Frances', 850000, 0.2, 7), new Programa(3, 'Aleman', 980000, 0.2, 9)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatricularComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [MatriculaService, ProgramaService, HttpService]
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
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(MatricularComponent);
    component = fixture.componentInstance;
    matriculaService = TestBed.inject(MatriculaService);
    programaService = TestBed.inject(ProgramaService);
    spyOn(programaService, 'consultar').and.returnValue(
      of(dummyProgramas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    programaService.consultar().subscribe(resultado => {
      expect(3).toBe(resultado.length)
    });
  });

  it('Debe validar que el formulario no sea valido sin nombre', () => {
    const form = component.form;
    form.controls['nombre'].setValue('');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('1');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario no sea valido sin numero de identificacion', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue('');
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('1');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario no sea valido sin email', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('1');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario no sea valido sin ciudad', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('1');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario no sea valido sin direccion', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('');
    form.controls['programaId'].setValue('1');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario no sea valido sin un idioma seleccionado', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('');
    expect(form.invalid).toBeTrue();
  });

  it('Debe validar que el formulario es valido', () => {
    const form = component.form;
    form.controls['nombre'].setValue('test');
    form.controls['numeroIdentificacion'].setValue(1111);
    form.controls['email'].setValue('test@test.com');
    form.controls['ciudad'].setValue('test');
    form.controls['direccion'].setValue('test');
    form.controls['programaId'].setValue('1');
    expect(form.valid).toBeTrue();
  });

  it('Debe crear la matricula al enviar el formulario y navegar a ver-matricula', fakeAsync(() => {
    router.initialNavigation();

    programaService.consultar().subscribe(resultado => {
      expect(3).toBe(resultado.length)
    });

    const dummyMatriculaRequest: MatriculaCrearRequest = {
      programa: new Programa(1, 'Ingles', 700000, 0.2, 5),
      usuarioMatricula: {
        numeroIdentificacion: 1111,
        nombre: 'test',
        email: 'test@test.com',
        ciudad: 'test',
        direccion: 'test'
      }
    };

    const dummyMatriculaRespone: MatriculaCrearResponse = {
      valor: 1001
    };

    matriculaService.guardar(dummyMatriculaRequest).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyMatriculaRespone);

      let btn = fixture.debugElement.query(By.css('#matricular'));
      btn.nativeElement.click();
      router.navigate([`matricula/ver-matricula/${respuesta.valor}`]);
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe(`/matricula/ver-matricula/${respuesta.valor}`);
    });
    const req = httpMock.expectOne('/inscripcion-ms/matriculas');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<MatriculaCrearResponse>({ body: dummyMatriculaRespone }));
    
  }));

});
