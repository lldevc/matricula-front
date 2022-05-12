import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatriculaService } from '../../shared/service/matricula.service';
import { RouterTestingModule } from '@angular/router/testing';


import { VerMatriculaComponent } from './ver-matricula.component';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VerMatriculaComponent', () => {
  let component: VerMatriculaComponent;
  let fixture: ComponentFixture<VerMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMatriculaComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [MatriculaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
