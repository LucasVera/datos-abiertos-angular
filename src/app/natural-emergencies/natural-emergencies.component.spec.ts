import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalEmergenciesComponent } from './natural-emergencies.component';

describe('NaturalEmergenciesComponent', () => {
  let component: NaturalEmergenciesComponent;
  let fixture: ComponentFixture<NaturalEmergenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalEmergenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalEmergenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
