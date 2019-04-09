import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesAllCodesComponent } from './codes-all-codes.component';

describe('CodesAllCodesComponent', () => {
  let component: CodesAllCodesComponent;
  let fixture: ComponentFixture<CodesAllCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesAllCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesAllCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
