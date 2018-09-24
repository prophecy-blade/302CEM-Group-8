import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitePartyComponent } from './suite-party.component';

describe('SuitePartyComponent', () => {
  let component: SuitePartyComponent;
  let fixture: ComponentFixture<SuitePartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitePartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
