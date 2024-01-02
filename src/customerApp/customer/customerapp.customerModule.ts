import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customerapp.customerComponent';
import { RouterModule } from '@angular/router'
import { CustomerRoutes } from '../routing/customerapp.customerRouting'

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
