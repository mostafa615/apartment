import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { KnobModule } from 'primeng/knob';
import { ToastModule } from 'primeng/toast';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KnobModule,
    ToastModule,
    RouterModule.forChild(routes)
    ],
  exports:[RouterModule],

})
export class DashboardModule { }
