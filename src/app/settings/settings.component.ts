
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user';
import {LoggerService} from '../services/logger.service';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {Http, Response} from '@angular/http';
import {logger} from 'codelyzer/util/logger';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {IHeatingTemperature} from '../models/heatingTemperature';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [],
  providers: [LoggerService, DataService]
})

export class SettingsComponent implements OnInit {


  serverInfo;
  resultsHeating;
  resultsThermometer;
  logs;
  resulsWeatherstation;

  constructor(private dataService: DataService, private logService: LoggerService, private http: Http) {
  }

  showLogs(limit: number) {
    this.dataService.showLogs(limit).subscribe(data => this.logs = data);

  }

  getServerInfo() {
    // this.dataService.getHeatingTemperature().subscribe(data => this.resultsHeating = data);
    // // this.logService.log(JSON.stringify(this.dataService.getServerInfo()));
    //
    // this.logService.log(JSON.stringify(this.dataService.getServerInfo()));
    // this.dataService.getServerInfo().subscribe(
    //   data => this.serverInfo = data
    // );
    this.dataService.getServerInfo().subscribe(data => this.serverInfo = data);
    // this.logService.log(this.serverInfo);
  }


  getHeatingTemperature() {
    this.logService.log(this.resultsHeating);
    }

  getHeatingData() {
    this.logService.log(this.resultsHeating);
  }


  ngOnInit() {
    // this.dataService.getHeatingTemperature().subscribe(data => this.resultsHeating = data);
    // this.dataService.getServerInfo().subscribe(data => this.serverInfo = JSON.stringify(data));
    this.dataService.getHeatingData().subscribe(data => this.resultsHeating = data);
  }


  setHeatingData() {
    this.logService.log(this.resultsHeating);

  }

  getIndoorTemperature() {
    this.dataService.getIndoorTemperature().subscribe(data => this.resultsThermometer = data);
    console.log(this.resultsThermometer);
  }

  getWeatherstationData() {
    this.dataService.getWeatherstationData().subscribe(data => this.resulsWeatherstation = data);
    console.log(this.resulsWeatherstation);
  }



}

