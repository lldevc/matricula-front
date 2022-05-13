import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe abrir el componente dialogPagar', () => {
    component.openDialogPagar();
    fixture.detectChanges()
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Pagar matricula');
  });

  it('Debe abrir el componente dialogEstudiante', () => {
    component.openDialogEstudiante();
    fixture.detectChanges()
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Buscar estudiante');
  });

  it('Debe abrir el componente dialogConsultar', () => {
    component.openDialogConsultar();
    fixture.detectChanges()
    const dialgoEditarUsuario = document.getElementById('titulo');
    expect(dialgoEditarUsuario.innerText).toEqual('Consultar matricula');
  });
});
