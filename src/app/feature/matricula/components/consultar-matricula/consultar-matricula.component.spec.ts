import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculaComponent } from './consultar-matricula.component';

describe('ConsultarMatriculaComponent', () => {
  let component: ConsultarMatriculaComponent;
  let fixture: ComponentFixture<ConsultarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
