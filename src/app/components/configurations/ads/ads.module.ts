 import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';


import { SharedModule } from 'src/app/shared/shared.module';
 import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
 import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
const routes: Routes = [];
@NgModule({
  imports: [
    CommonModule,
   PaginatorModule,
   BrowserAnimationsModule,
   SharedModule,
   FormsModule,
   DropdownModule,
   TableModule,
   CalendarModule,
   ReactiveFormsModule,
   TagModule,
   ProgressSpinnerModule,
   ButtonModule,
   ToastModule,
   RouterModule.forChild(routes)
 ],
  declarations: [AdsComponent],  providers: [MessageService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdsModule { }
