import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DialogPagarComponent } from './dialog-pagar.component';

describe('DialogPagarComponent', () => {
  let component: DialogPagarComponent;
  let fixture: ComponentFixture<DialogPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPagarComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
