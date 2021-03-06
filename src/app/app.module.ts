import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeatingComponent } from './heating/heating.component';
import { ShutterComponent } from './shutter/shutter.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { WeatherstationComponent } from './weatherstation/weatherstation.component';
import { SettingsComponent } from './settings/settings.component';
import {HeaderComponent} from './header.component';
import {routing} from './app.routing';
import { DashboardHeatingComponent } from './dashboard/devices/dashboard.heating.component';
import { DashboardShutterComponent } from './dashboard/devices/dashboard.shutter.component';
import { DashboardThermometerComponent } from './dashboard/devices/dashboard.thermometer.component';
import { DashboardWeatherstationComponent } from './dashboard/devices/dashboard.weatherstation.component';
import { LoginComponent } from './login/login.component';
import {LoggerService} from './services/logger.service';
import {DataService} from './services/data.service';
import {NewThermometerComponent} from './thermometer/new-thermometer/new-thermometer.component';
import {NewHeatingComponent} from './heating/new-heating/new-heating.component';
import {NewWeatherstationComponent} from './weatherstation/new-weatherstation/new-weatherstation.component';
import { BsDropdownModule } from '../../node_modules/ngx-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardHeatingComponent,
    DashboardShutterComponent,
    DashboardThermometerComponent,
    DashboardWeatherstationComponent,
    HeatingComponent,
    ShutterComponent,
    ThermometerComponent,
    WeatherstationComponent,
    SettingsComponent,
    LoginComponent,
    NewHeatingComponent,
    NewThermometerComponent,
    NewWeatherstationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BsDropdownModule.forRoot()
  ],
  providers: [LoggerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
