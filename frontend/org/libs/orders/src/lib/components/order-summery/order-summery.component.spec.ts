import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSummeryComponent } from './order-summery.component';

describe('OrderSummeryComponent', () => {
  let component: OrderSummeryComponent;
  let fixture: ComponentFixture<OrderSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderSummeryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
