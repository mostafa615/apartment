import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import {  CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';



import { SecondStepComponent } from './add-new-apartments/steps/second-step/second-step.component';
import { ThirdStepComponent } from './add-new-apartments/steps/third-step/third-step.component';
import { ForthStepComponent } from './add-new-apartments/steps/forth-step/forth-step.component';
import { FirstStepComponent } from './add-new-apartments/steps/first-step/first-step.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { AddNewApartmentsComponent } from './add-new-apartments/add-new-apartments.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ContractComponent } from './contract/contract.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

import { BookingComponent } from './booking/booking.component';

import { ApartmentsComponent } from './apartments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { PaginatorModule } from 'primeng/paginator';

//

 import { DropdownModule } from 'primeng/dropdown';


  import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
 import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: ApartmentsComponent },
  { path: 'Add-NewApartments', component: AddNewApartmentsComponent }
];

@NgModule({
  declarations: [
    AddNewApartmentsComponent,ViewBookingComponent,
    ApartmentDetailsComponent,BookingComponent,
    ApartmentsComponent,
    ContractComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    ForthStepComponent,
    CreateContractComponent,

  ],
  exports: [AddNewApartmentsComponent, ApartmentsComponent],
  imports: [
    CommonModule,ButtonModule,TagModule,TableModule,DropdownModule,
    SharedModule,
     StepsModule,
    FormsModule,
    PaginatorModule,
    GoogleMapsModule,
    InputSwitchModule,
    CalendarModule,
    FileUploadModule,
    RatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    FieldsetModule,
    ToastModule,

    RouterModule.forChild(routes)
  ],
  providers: [HttpClientModule, MessageService]
})
export class AppartmentsModule {


}
