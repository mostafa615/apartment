import {   RouterModule, Routes,CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateContractComponent } from './components/apartments/contract/create-contract/create-contract.component';
import { AddNewApartmentsComponent } from './components/apartments/add-new-apartments/add-new-apartments.component';
import { ApartmentDetailsComponent } from './components/apartments/apartment-details/apartment-details.component';
import { ContractComponent } from './components/apartments/contract/contract.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { OwnersComponent } from './components/owners/owners.component';
import { UserComponent } from './components/user/user.component';
 import { OwnerDetailsComponent } from './components/owners/owner-details/owner-details.component';
import { MessageComponent } from './components/message/message.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AdminsComponent } from './components/admins//admins.component';
import { RolesComponent } from './components/roles/roles.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AddAdminComponent } from './components/admins/add-admin/add-admin.component';
import { EditAdminComponent } from './components/admins/edit-admin/edit-admin.component';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { ViewInquireComponent } from './components/inquiries/view-inquire/view-inquire.component';
import { InquireOfferComponent } from './components/inquiries/inquire-offer/inquire-offer.component';
import { InquireEditComponent } from './components/inquiries/inquire-edit/inquire-edit.component';
import { CreacteContractComponent } from './components/inquiries/creacte-contract/creacte-contract.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AddWorkerComponent } from './components/workers/add-worker/add-worker.component';
import { EditWorkerComponent } from './components/workers/edit-worker/edit-worker.component';
import { WorkerProfileComponent } from './components/workers/worker-profile/worker-profile.component';
import { MainFileComponent } from './components/issueReports/main-file/main-file.component';
import { ReportsDetailsComponent } from './components/issueReports/reports-details/reports-details.component';
import { AssginIssueComponent } from './components/issueReports/assgin-issue/assgin-issue.component';

import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent,canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "apartments", component: ApartmentsComponent,canActivate: [AuthGuard], },
  { path: "apartments/page/:id", component: AddNewApartmentsComponent,canActivate: [AuthGuard] },
  { path: "apartments/apartments-details/:id", component: ApartmentDetailsComponent,canActivate: [AuthGuard] },
  { path: "apartments/:id", component: ContractComponent,canActivate: [AuthGuard] },
  { path: "apartments/contract/:id", component: CreateContractComponent,canActivate: [AuthGuard] },
  { path: "users", component: UserComponent ,canActivate: [AuthGuard]},

  { path: "owners", component: OwnersComponent ,canActivate: [AuthGuard]},
   { path: "owner/:id", component: OwnerDetailsComponent ,canActivate: [AuthGuard]},
  { path: "owner/:page/:id", component: OwnerDetailsComponent ,canActivate: [AuthGuard]},
  { path: "messages", component: MessageComponent,canActivate: [AuthGuard] },
  { path: "statistics", component: StatisticsComponent,canActivate: [AuthGuard] },
  { path: "payments", component: PaymentsComponent ,canActivate: [AuthGuard]},
  { path: "admins", component: AdminsComponent ,canActivate: [AuthGuard]},
  { path: "roles", component: RolesComponent ,canActivate: [AuthGuard]},
  { path: "authorization/:id", component: AuthorizationComponent ,canActivate: [AuthGuard]},
  { path: "add-admin", component: AddAdminComponent ,canActivate: [AuthGuard]},
  { path: "edit-admin/:id", component: EditAdminComponent ,canActivate: [AuthGuard]},
  { path: "inquiries", component: InquiriesComponent ,canActivate: [AuthGuard],},

  { path: "view-inquire/:id", component: ViewInquireComponent ,canActivate: [AuthGuard]},

  { path: "inquire-offer", component: InquireOfferComponent ,canActivate: [AuthGuard]},
  { path: "inquire-edit/:id", component: InquireEditComponent ,canActivate: [AuthGuard]},
  { path: "create-contract", component: CreacteContractComponent ,canActivate: [AuthGuard]},
  { path: "workers", component:   WorkersComponent,canActivate: [AuthGuard]},
  { path: "add-workers", component: AddWorkerComponent,canActivate: [AuthGuard]},

  { path: "edit-workers/:id", component: EditWorkerComponent,canActivate: [AuthGuard]},
  { path: "worker-profile/:id", component: WorkerProfileComponent,canActivate: [AuthGuard]},
  { path: "Issue_Reports", component: MainFileComponent,canActivate: [AuthGuard]},
  { path: "Report-view/:id", component: ReportsDetailsComponent,canActivate: [AuthGuard]},
  { path: "assgin-issue/:id", component: AssginIssueComponent,canActivate: [AuthGuard]},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
