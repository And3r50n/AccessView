import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredApprovalsComponent } from './required-approvals.component';

describe('RequiredApprovalsComponent', () => {
  let component: RequiredApprovalsComponent;
  let fixture: ComponentFixture<RequiredApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
