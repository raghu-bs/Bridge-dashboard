import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersErrorsComponent } from './orders-errors.component';

describe('OrdersErrorsComponent', () => {
  let component: OrdersErrorsComponent;
  let fixture: ComponentFixture<OrdersErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
