import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteDoubleComponent } from './suite-double.component';

describe('SuiteDoubleComponent', () => {
  let component: SuiteDoubleComponent;
  let fixture: ComponentFixture<SuiteDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
