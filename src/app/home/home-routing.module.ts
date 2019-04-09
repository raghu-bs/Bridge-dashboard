import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderOverviewComponent } from './orders/order-overview/order-overview.component';
import { OrdersErrorsComponent } from './orders/orders-errors/orders-errors.component';
import { OrderAllOrdersComponent } from './orders/order-all-orders/order-all-orders.component';
import { CodesComponent } from './codes/codes.component';
import { CodesAllCodesComponent } from './codes/codes-all-codes/codes-all-codes.component';
import { CodesErrorsComponent } from './codes/codes-errors/codes-errors.component';
import { CodesOverviewComponent } from './codes/codes-overview/codes-overview.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { OrganisationsOverviewComponent } from './organisations/organisations-overview/organisations-overview.component';
import { OrganisationsAllComponent } from './organisations/organisations-all/organisations-all.component';
import { OrganisationsNotPlacedordersComponent } from './organisations/organisations-not-placedorders/organisations-not-placedorders.component';

const homeroutes: Routes = [
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'organisation-list',
        component: OrganisationListComponent
      },
      {
        path: 'orders',
        component: OrdersComponent, children: [
          {
            path: 'orders-overview',
            component: OrderOverviewComponent
          },
          {
            path: 'orders-all-orders',
            component: OrderAllOrdersComponent
          },
          {
            path: 'orders-errors',
            component: OrdersErrorsComponent
          },
        ]
      },
      {
        path: 'codes',
        component: CodesComponent, children: [
          {
            path: 'codes-overview',
            component: CodesOverviewComponent
          },
          {
            path: 'codes-all-codes',
            component: CodesAllCodesComponent
          },
          {
            path: 'codes-errors',
            component: CodesErrorsComponent
          },
        ]
      },

      {
        path: 'organisations',
        component: OrganisationsComponent, children: [
          {
            path: 'organisations-overview',
            component: OrganisationsOverviewComponent
          },
          {
            path: 'organisations-all',
            component: OrganisationsAllComponent
          },
          {
            path: 'organisations-notplaced',
            component: OrganisationsNotPlacedordersComponent
          },
        ]

      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(homeroutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
