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
  private temperatureObject: any;


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

  // setHeatingTempature(temperature: number) {
  //   // "setHeatingTemperature/requesting_user/{requesting_user}/temperature/{temperature}"
  //   // const temperature = 30.00;
  //
  //   const headers = new Headers();
  //   // headers.append('Content-Type', 'application/json; charset=utf-8');
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
  //
  //   const options = new RequestOptions({headers: headers});
  //   // const body = JSON.stringify(temperature);
  //   const body = '';
  //
  //   this.http.put('http://localhost:8080/ws/setHeatingTemperature/requesting_user/' +
  //     this.requestingUser + '/temperature/' + temperature,
  //     body, headers)
  //     .subscribe(
  //         () => {},
  //         err => console.error((err))
  //       );
  // }

  setHeatingTempature(temperature: number) {
    return this.http.get('http://localhost:8080/ws/setHeatingTemperature/requesting_user/' +
      this.requestingUser + '/temperature/' + temperature)
      .map(data => data.json());
  }

  createHeating(modelVariant: string, manufacturer: string, genericName: string, serialnumber: string) {
    console.log('IM CREATE HEATING');
    console.log(modelVariant);
    console.log(manufacturer);
    console.log(genericName);
    console.log(serialnumber);
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

  getIndoorTemperature(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getIndoorTemperature/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }

  getWeatherstationData() {
    return this.http.get('http://localhost:8080/ws/getWeatherStationData/requesting_user/' + this.requestingUser)
      .map(data => data.json());
  }





  // updateFood(food) {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let body = JSON.stringify(food);
  //   return this.http.put('/api/food/' + food_id, body, options ).map((res: Response) => res.json());
  // }

  // getHeatingTemperature1(): Observable<IHeatingTemperature[]> {
  //   return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
  //     .map(data => data.json() as IHeatingTemperature[]);
  // }





  postJSON() {
    const json = JSON.stringify({var1: 'test', var2: 'xd', var3: 'test2'});
    const params = 'json=' + json;
    const headers = new Headers();
    headers.append('Content-Type',
      'application/x-www-form-urlencoded');

    return this.http.post('http://validate.jsontest.com',
      //  return this.http.post('localhost:8080/ws/getHeatingTemperature/requesting_user/',
      params,
      {headers: headers
      })
      .map(res => res.json());
  }

  // TODO: implement
  postNewHeatingData(name, manufacturer, modelVariant,
                     serialnumber, currentTemperature, actionMode) {

  }

}
