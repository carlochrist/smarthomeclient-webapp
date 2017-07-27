/**
 * Created by Carlo on 26.07.2017.
 */
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IHeatingTemperature} from '../models/heatingTemperature';
import { MessageBean } from '../models/messageBean';


@Injectable()
export class DataService {

  private temperature: number;
  private temperatureObject: any;


  constructor(private http: Http) {
  }

  getServerInfo() {
      return this.http.get('http://localhost:8080/ws/info')
        .map(res => res.json());
  }


  getHeatingTemperature(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
      .map(data => data.json());
  }


  getHeatingData(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getHeatingData/requesting_user/test')
      .map(data => data.json());
  }



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

}
