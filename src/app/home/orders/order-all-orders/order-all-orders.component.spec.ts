import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAllOrdersComponent } from './order-all-orders.component';

describe('OrderAllOrdersComponent', () => {
  let component: OrderAllOrdersComponent;
  let fixture: ComponentFixture<OrderAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
