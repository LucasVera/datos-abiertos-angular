import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesMenuComponent } from './medicines-menu.component';

describe('MedicinesMenuComponent', () => {
  let component: MedicinesMenuComponent;
  let fixture: ComponentFixture<MedicinesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
