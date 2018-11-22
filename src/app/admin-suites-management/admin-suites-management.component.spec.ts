import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuitesManagementComponent } from './admin-suites-management.component';

describe('AdminSuitesManagementComponent', () => {
  let component: AdminSuitesManagementComponent;
  let fixture: ComponentFixture<AdminSuitesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSuitesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSuitesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
