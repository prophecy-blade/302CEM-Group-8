import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitesDetailComponent } from './suites-detail.component';

describe('SuitesDetailComponent', () => {
  let component: SuitesDetailComponent;
  let fixture: ComponentFixture<SuitesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
