import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatriculaService } from '../../shared/service/matricula.service';
import { RouterTestingModule } from '@angular/router/testing';


import { VerMatriculaComponent } from './ver-matricula.component';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Matricula } from '../../shared/model/Matricula';
import { UsuarioMatricula } from 'src/app/feature/usuarioMatricula/shared/model/usuarioMatricula';
import { Programa } from '@programa/shared/model/programa';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';

describe('VerMatriculaComponent', () => {
  let component: VerMatriculaComponent;
  let fixture: ComponentFixture<VerMatriculaComponent>;
  let matriculaService: MatriculaService;

  let location: Location;
  let router: Router;

  const routes = [
    {path: 'matricula/pagar-matricula/:id', component: {}}
  ] as Routes;

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
      declarations: [ VerMatriculaComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
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
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(VerMatriculaComponent);
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

  it('deberia navegar a pagar-matricula', fakeAsync(() => {
    router.initialNavigation();

    const btn = fixture.debugElement.query(By.css('#pagar'));
    btn.nativeElement.click();
    router.navigate(['/matricula/pagar-matricula/1000']);

    tick();

    expect(router.url).toBe('/matricula/pagar-matricula/1000');
    expect(location.path()).toBe('/matricula/pagar-matricula/1000');
  }));
});
