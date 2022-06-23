import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConocerMasComponent } from './modal-conocer-mas.component';

describe('ModalConocerMasComponent', () => {
  let component: ModalConocerMasComponent;
  let fixture: ComponentFixture<ModalConocerMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConocerMasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConocerMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
