import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { ReportsDetailsComponent } from './components/issueReports/reports-details/reports-details.component';
import { MainFileComponent } from './components/issueReports/main-file/main-file.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AppartmentsModule } from './components/apartments/appartments.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { MessageModule } from './components/message/message.module';
import { PaymentsModule } from './components/payments/payments.module';
import { AdminsModule } from './components/admins/admins.module';
import { RolesModule } from './components/roles/roles.module';
import { WorkersModule } from './components/workers/workers.module';

import { AuthorizationModule } from './components/authorization/authorization.module';

import { OwnersModule } from './components/owners/owners.module';
import { InquiriesModule } from './components/inquiries/inquiries.module';
import { IssuReportsModule } from './components/issueReports/issu-reports.module';

import { AuthModule } from './components/auth/auth.module';
import { UserModule } from './components/user/user.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,

  ],
  imports: [
    AppRoutingModule,IssuReportsModule,
    BrowserModule,AuthorizationModule,
    AdminsModule,
    HttpClientModule,
    InquiriesModule,
    WorkersModule,
    PaymentsModule,
    RolesModule,
    FormsModule,
    SharedModule,
     AppartmentsModule,
    ReactiveFormsModule,
    CalendarModule,
    DashboardModule,
    MessageModule,
    AuthModule,
    UserModule,
    OwnersModule,
    GoogleMapsModule ,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [HttpClientModule,   JwtInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
