import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DialogConsultarComponent } from './dialog-consultar.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogConsultarComponent', () => {
  let component: DialogConsultarComponent;
  let fixture: ComponentFixture<DialogConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConsultarComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule 
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia validar que el formulario es invalido', () => {
    const form = component.form
    const id = form.controls['id'];
    id.setValue('');
    expect(form.invalid).toBeTrue();
  })

  it('Deberia validar que el formulario es valido', () => {
    const form = component.form
    const id = form.controls['id'];
    id.setValue('1000');
    expect(form.valid).toBeTrue();
  })

});
