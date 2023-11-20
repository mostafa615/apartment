import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details/user-details.component';
import { EditeUserDetailsComponent } from './edite-user-details/edite-user-details.component';


 import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


  import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
 import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'app-user-details/:id', component: UserDetailsComponent },
  { path: 'app-edite-user-details/:id', component: EditeUserDetailsComponent }
];

@NgModule({
  declarations: [UserComponent, UserDetailsComponent, EditeUserDetailsComponent],
  exports: [UserComponent, UserDetailsComponent, EditeUserDetailsComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    DropdownModule,
    TableModule,
    ReactiveFormsModule,
    TagModule,
    ProgressSpinnerModule,
    ButtonModule,
    ToastModule,
    RouterModule.forChild(routes)
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule { }
