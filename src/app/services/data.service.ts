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

  // getHeatingTemperature(): number {
  //   // Make the HTTP request:
  //   this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
  //     .subscribe(data => {
  //       // Read the result field from the JSON response.
  //
  //       // this.resultsHeating = data['results'];
  //       // this.resultsHeating = data.json();
  //       // this.logService.log(JSON.stringify(this.resultsHeating));
  //       this.temperatureObject = JSON.stringify(data.json());
  //     });
  //   return this.temperatureObject;
  // }


  // getHeatingTemperature(): Observable<HeatingTemperature[]> {
  //
  //   // ...using get request
  //   return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
  //   // ...and calling .json() on the response to return data
  //     .map((res: Response) => res.json())
  //     // ...errors if any
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //
  // }

  // getHeatingTemperature(){
  //
  //   // ...using get request
  //   return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
  //   // ...and calling .json() on the response to return data
  //     .map((res: Response) => this.temperatureObject = res.json())
  //     // ...errors if any
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //
  // }

  getHeatingTemperature1(): Observable<any> {
    return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
      .map(data => data.json());
  }

  getHeatingTemperature(): Observable<IHeatingTemperature[]> {
    return this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
      .map(data => data.json() as IHeatingTemperature[]);
  }


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
