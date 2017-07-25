/**
 * Created by Carlo on 25.07.2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Photo} from '../models/photo';

@Injectable()
export class PhotoService {
  constructor(private http: Http) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
