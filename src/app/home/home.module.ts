import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule, MatSnackBarModule,
  MatListModule, MatMenuModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
  MatTableModule, MatTabsModule, MatProgressSpinnerModule
} from '@angular/material';
import { ChartModule } from 'angular-highcharts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from '../home/home.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrdersComponent } from './orders/orders.component';
import { CodesComponent } from './codes/codes.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AdminComponent } from './admin/admin.component';
import { OrderOverviewComponent } from './orders/order-overview/order-overview.component';
import { OrderAllOrdersComponent } from './orders/order-all-orders/order-all-orders.component';
import { OrdersErrorsComponent } from './orders/orders-errors/orders-errors.component';
import { CodesOverviewComponent } from './codes/codes-overview/codes-overview.component';
import { CodesAllCodesComponent } from './codes/codes-all-codes/codes-all-codes.component';
import { CodesErrorsComponent } from './codes/codes-errors/codes-errors.component';
import { OrganisationsOverviewComponent } from './organisations/organisations-overview/organisations-overview.component';
import { OrganisationsAllComponent } from './organisations/organisations-all/organisations-all.component';
import { OrganisationsNotPlacedordersComponent } from './organisations/organisations-not-placedorders/organisations-not-placedorders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent,
    HomeComponent,
    OrganisationListComponent,
    OrdersComponent,
    CodesComponent,
    OrganisationsComponent,
    ReportingComponent,
    AdminComponent,
    OrderOverviewComponent,
    OrderAllOrdersComponent,
    OrdersErrorsComponent,
    CodesOverviewComponent,
    CodesAllCodesComponent,
    CodesErrorsComponent,
    OrganisationsOverviewComponent,
    OrganisationsAllComponent,
    OrganisationsNotPlacedordersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ChartModule, MatCardModule, MatSnackBarModule, MatListModule, MatMenuModule, MatTabsModule,
    MatBadgeModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatProgressSpinnerModule
  ]
})
export class HomeModule { }
