import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmResponsePage } from './alarm-response.page';

describe('AlarmResponsePage', () => {
  let component: AlarmResponsePage;
  let fixture: ComponentFixture<AlarmResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmResponsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
