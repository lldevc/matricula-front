import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMatriculaComponent } from './ver-matricula.component';

describe('VerMatriculaComponent', () => {
  let component: VerMatriculaComponent;
  let fixture: ComponentFixture<VerMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMatriculaComponent ]
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
