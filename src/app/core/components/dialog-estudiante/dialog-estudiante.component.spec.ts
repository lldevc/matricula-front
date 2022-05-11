import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DialogEstudianteComponent } from './dialog-estudiante.component';

describe('DialogEstudianteComponent', () => {
  let component: DialogEstudianteComponent;
  let fixture: ComponentFixture<DialogEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEstudianteComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
