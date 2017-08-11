
import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../services/logger.service';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {Http, Response} from '@angular/http';
import {logger} from 'codelyzer/util/logger';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';

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
    this.dataService.getServerInfo().subscribe(data => this.serverInfo = data);
  }


  getHeatingTemperature() {
    this.logService.log(this.resultsHeating);
    }

  getHeatingData() {
    this.logService.log(this.resultsHeating);
  }


  ngOnInit() {
    this.dataService.getHeatingData().subscribe(data => this.resultsHeating = data);
  }


  setHeatingData() {
    this.logService.log(this.resultsHeating);

  }

  getIndoorTemperature() {
    this.dataService.getIndoorTemperature().subscribe(data => this.resultsThermometer = data);
    console.log(this.resultsThermometer);
  }

  getThermometerData() {
    this.dataService.getThermometerData().subscribe(data => this.resultsThermometer = data);
    console.log(this.resultsThermometer);
  }

  getWeatherstationData() {
    this.dataService.getWeatherstationData().subscribe(data => this.resulsWeatherstation = data);
    console.log(this.resulsWeatherstation);
  }



}

