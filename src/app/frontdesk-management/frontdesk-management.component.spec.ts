import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskManagementComponent } from './frontdesk-management.component';

describe('FrontdeskManagementComponent', () => {
  let component: FrontdeskManagementComponent;
  let fixture: ComponentFixture<FrontdeskManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontdeskManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontdeskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
