import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventosPage } from './modal-eventos.page';

describe('ModalEventosPage', () => {
  let component: ModalEventosPage;
  let fixture: ComponentFixture<ModalEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEventosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
