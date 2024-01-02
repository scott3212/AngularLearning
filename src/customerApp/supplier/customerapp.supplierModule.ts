import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './customerapp.supplierComponent';
import { RouterModule } from '@angular/router'
import { SupplierRoutes } from '../routing/customerapp.supplierRouting'

@NgModule({
  declarations: [
    SupplierComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
