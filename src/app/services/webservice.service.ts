/**
 * Created by Carlo on 25.07.2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';
import {LoggerService} from './logger.service';

@Injectable()
export class WebserviceService {
  constructor(private http: Http, private logger: LoggerService) {
  }

  // helloWorld(): Observable<User[]> {
  //   return this.http.get('info/karleparameter')
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

  helloWorld() {
     return this.http.get('localhost:8080/ws/info')
    // return this.http.get('localhost:8080/info/')
    // return this.http.get('http://validate.jsontest.com/?json=[1]')
      .map(res => res.json());
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
