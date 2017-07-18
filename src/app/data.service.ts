import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    // TODO: Pfad von Datenquelle anpassen
    // return this.http.get('http://date.jsontest.com').subscribe(
    return this.http.get('../public/heatingData.json').subscribe(
      (data) => console.log(data)
    );
  }

  getCurrentTime() {
    return this.http.get('http://date.jsontest.com')
      .map((response: Response) => response.json());
  }

  postJSON() {

  }


}
