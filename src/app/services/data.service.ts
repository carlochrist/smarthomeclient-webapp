/**
 * Created by Carlo on 26.07.2017.
 */
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { MessageBean } from '../models/messageBean';

@Injectable()
export class DataService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.actionUrl = 'localhost:8080/ws/info';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  // public getInfo = (): Observable<Response> => {
  //   return this.http.get(this.actionUrl)
  //     .map
  // }


}
