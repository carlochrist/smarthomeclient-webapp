/* tslint:ensable */
/**
 * Created by Carlo on 26.07.2017.
 */
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IHeatingTemperature} from '../models/heatingTemperature';
import { MessageBean } from '../models/messageBean';
import {LoggerService} from './logger.service';


@Injectable()
export class DataService {

  // TODO: set requestingUser as logged in user
  private requestingUser = 'dummy';
  private temperature: number;


  constructor(private http: Http, private loggerService: LoggerService) {
  }

  getServerInfo(): Observable<any>  {
      return this.http.get('http://localhost:8080/ws/info');
  }

  showLogs(limit: number) {
    return this.http.get('http://localhost:8080/ws/readLogs/requesting_user/' +
      this.requestingUser + '/limit/' + limit)
      .map(data => data.json());
  }


  getHeatingTemperature(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }


  getHeatingData(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getHeatingData/requesting_user/test' + this.requestingUser)
      .map(data => data.json());
  }

  setHeatingTempature(temperature: number) {
    return this.http.get('http://localhost:8080/ws/setHeatingTemperature/requesting_user/' +
      this.requestingUser + '/temperature/' + temperature)
      .map(data => data.json());
  }

  createHeating(modelVariant: string, manufacturer: string, genericName: string, serialnumber: string) {
    return this.http.get('http://localhost:8080/ws/createHeating/' +
      'requesting_user/' + this.requestingUser +
      '/modelVariant/' + modelVariant +
      '/manufacturer/' + manufacturer +
      '/genericName/' +  genericName +
      '/serialnumber/' + serialnumber)
      .map(data => data.json());
  }

  deleteHeating(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/deleteHeating/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  switchHeatingOn(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/switchHeatingOn/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  switchHeatingOff(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/switchHeatingOff/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  createThermometer(modelVariant: string, manufacturer: string, genericName: string, serialnumber: string) {
    console.log(modelVariant);
    console.log(manufacturer);
    console.log(genericName);
    console.log(serialnumber);
    return this.http.get('http://localhost:8080/ws/createThermometer/' +
      'requesting_user/' + this.requestingUser +
      '/modelVariant/' + modelVariant +
      '/manufacturer/' + manufacturer +
      '/genericName/' +  genericName +
      '/serialnumber/' + serialnumber)
      .map(data => data.json());
  }

  deleteThermometer(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/deleteThermometer/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  getThermometerData(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getThermometerData/requesting_user/test' + this.requestingUser)
      .map(data => data.json());
  }

  getIndoorTemperature(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getIndoorTemperature/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  createWeatherstation(modelVariant: string, manufacturer: string, genericName: string, serialnumber: string) {
    return this.http.get('http://localhost:8080/ws/createWeatherStation/' +
      'requesting_user/' + this.requestingUser +
      '/modelVariant/' + modelVariant +
      '/manufacturer/' + manufacturer +
      '/genericName/' +  genericName +
      '/serialnumber/' + serialnumber)
      .map(data => data.json());
  }

  deleteWeatherstation(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/deleteWeatherstation/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  getWeatherstationData() {
    return this.http.get('http://localhost:8080/ws/getWeatherStationData/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

}
