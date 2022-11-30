import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateColumnComponent } from './modal-create-column.component';

describe('ModalCreateColumnComponent', () => {
  let component: ModalCreateColumnComponent;
  let fixture: ComponentFixture<ModalCreateColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
