import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsOverviewComponent } from './organisations-overview.component';

describe('OrganisationsOverviewComponent', () => {
  let component: OrganisationsOverviewComponent;
  let fixture: ComponentFixture<OrganisationsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
