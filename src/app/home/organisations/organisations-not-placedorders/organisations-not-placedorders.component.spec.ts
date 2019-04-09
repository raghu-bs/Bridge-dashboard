import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsNotPlacedordersComponent } from './organisations-not-placedorders.component';

describe('OrganisationsNotPlacedordersComponent', () => {
  let component: OrganisationsNotPlacedordersComponent;
  let fixture: ComponentFixture<OrganisationsNotPlacedordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationsNotPlacedordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsNotPlacedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
