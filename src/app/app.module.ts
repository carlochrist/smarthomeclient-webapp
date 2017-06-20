import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeatingComponent } from './heating/heating.component';
import { ShutterComponent } from './shutter/shutter.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { WeatherstationComponent } from './weatherstation/weatherstation.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeatingComponent,
    ShutterComponent,
    ThermometerComponent,
    WeatherstationComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
