import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsFormFICComponent } from './subscriptions-form-fic.component';

describe('SubscriptionsFormFICComponent', () => {
  let component: SubscriptionsFormFICComponent;
  let fixture: ComponentFixture<SubscriptionsFormFICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsFormFICComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsFormFICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
