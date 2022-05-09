import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConsultarComponent } from './dialog-consultar.component';

describe('DialogConsultarComponent', () => {
  let component: DialogConsultarComponent;
  let fixture: ComponentFixture<DialogConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConsultarComponent ]
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
});
