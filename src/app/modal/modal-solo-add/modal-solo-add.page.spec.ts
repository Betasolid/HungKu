import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoloAddPage } from './modal-solo-add.page';

describe('ModalSoloAddPage', () => {
  let component: ModalSoloAddPage;
  let fixture: ComponentFixture<ModalSoloAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSoloAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSoloAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
