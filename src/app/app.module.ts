// app.module.ts
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { SpaceXService } from './spacex-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    MissionfilterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
