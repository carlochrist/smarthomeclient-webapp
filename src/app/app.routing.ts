import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {WeatherstationComponent} from './weatherstation/weatherstation.component';
import {ThermometerComponent} from './thermometer/thermometer.component';
import {ShutterComponent} from './shutter/shutter.component';
import {HeatingComponent} from './heating/heating.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
  // pathMatch: 'full': redirect only if complete path is empty
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heating', component: HeatingComponent},
  { path: 'shutter', component: ShutterComponent},
  { path: 'thermometer', component: ThermometerComponent},
  { path: 'weatherstation', component: WeatherstationComponent},
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
