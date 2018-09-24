import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteFamilyComponent } from './suite-family.component';

describe('SuiteFamilyComponent', () => {
  let component: SuiteFamilyComponent;
  let fixture: ComponentFixture<SuiteFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
