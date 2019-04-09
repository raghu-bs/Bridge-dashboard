import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsAllComponent } from './organisations-all.component';

describe('OrganisationsAllComponent', () => {
  let component: OrganisationsAllComponent;
  let fixture: ComponentFixture<OrganisationsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
