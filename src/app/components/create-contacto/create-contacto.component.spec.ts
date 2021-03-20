import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactoComponent } from './create-contacto.component';

describe('CreateContactoComponent', () => {
  let component: CreateContactoComponent;
  let fixture: ComponentFixture<CreateContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
