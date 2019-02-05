import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInicioPage } from './tabInicio.page';

describe('TabInicioPage', () => {
  let component: TabInicioPage;
  let fixture: ComponentFixture<TabInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabInicioPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
