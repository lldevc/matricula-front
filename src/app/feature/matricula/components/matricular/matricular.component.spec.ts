import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularComponent } from './matricular.component';
import { MatriculaService } from 'src/app/feature/matricula/shared/service/matricula.service';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramaService } from '@programa/shared/service/programa.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MatricularComponent', () => {
  let component: MatricularComponent;
  let fixture: ComponentFixture<MatricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatricularComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(MatricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
