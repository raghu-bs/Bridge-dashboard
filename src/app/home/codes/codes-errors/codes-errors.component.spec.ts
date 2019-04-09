import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesErrorsComponent } from './codes-errors.component';

describe('CodesErrorsComponent', () => {
  let component: CodesErrorsComponent;
  let fixture: ComponentFixture<CodesErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
