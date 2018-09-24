import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteSingleComponent } from './suite-single.component';

describe('SuiteSingleComponent', () => {
  let component: SuiteSingleComponent;
  let fixture: ComponentFixture<SuiteSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
