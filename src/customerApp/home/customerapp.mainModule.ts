import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MasterpageComponent } from './customerapp.MasterpageComponent';
import { HomeComponent } from './customerapp.homeComponent';
import { RouterModule } from '@angular/router'
import { MainRoutes } from '../routing/customerapp.mainRouting'
import { ILogger, DBLogger } from '../utility/customerApp.Logger';

@NgModule({
  declarations: [
    MasterpageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [{
    provide: ILogger,
    useClass: DBLogger
  }],
  bootstrap: [MasterpageComponent]
})
export class MainModule { }
