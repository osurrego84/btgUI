import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsFormFPVComponent } from './subscriptions-form-fpv.component';

describe('SubscriptionsFormFPVComponent', () => {
  let component: SubscriptionsFormFPVComponent;
  let fixture: ComponentFixture<SubscriptionsFormFPVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsFormFPVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsFormFPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
