import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteStraitsComponent } from './suite-straits.component';

describe('SuiteStraitsComponent', () => {
  let component: SuiteStraitsComponent;
  let fixture: ComponentFixture<SuiteStraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteStraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteStraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
