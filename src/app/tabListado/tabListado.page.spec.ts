import { TabListadoPage } from '././tabListado.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TabListadoPage', () => {
  let component: TabListadoPage;
  let fixture: ComponentFixture<TabListadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabListadoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
