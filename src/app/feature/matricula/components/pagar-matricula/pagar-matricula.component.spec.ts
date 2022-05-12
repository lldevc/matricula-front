import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { PagarMatriculaComponent } from './pagar-matricula.component';
import { MatriculaService } from 'src/app/feature/matricula/shared/service/matricula.service';
import { HttpService } from '@core/services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PagarMatriculaComponent', () => {
  let component: PagarMatriculaComponent;
  let fixture: ComponentFixture<PagarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarMatriculaComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [MatriculaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
