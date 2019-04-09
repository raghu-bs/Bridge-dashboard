import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesOverviewComponent } from './codes-overview.component';

describe('CodesOverviewComponent', () => {
  let component: CodesOverviewComponent;
  let fixture: ComponentFixture<CodesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
