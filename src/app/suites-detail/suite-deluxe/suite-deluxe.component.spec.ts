import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteDeluxeComponent } from './suite-deluxe.component';

describe('SuiteDeluxeComponent', () => {
  let component: SuiteDeluxeComponent;
  let fixture: ComponentFixture<SuiteDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
