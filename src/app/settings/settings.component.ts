import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user';
import {LoggerService} from '../services/logger.service';
import {PhotoService} from '../services/photo.service';
import {WebserviceService} from '../services/webservice.service';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [],
  providers: [LoggerService, WebserviceService]
})

export class SettingsComponent implements OnInit {

  users;
  photos;

  getData: string;
  postData: string;

  results: string[];

  constructor(private webserviceService: WebserviceService, private userService: UserService,
              private photoService: PhotoService, private logService: LoggerService, private http: Http) {
    this.users = userService.getUsers();
    this.photos = photoService.getPhotos();
  }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

  logUsers() {
    this.logService.log(this.users);
  }

  helloWorldTestGet() {
    // this.webserviceService.helloWorld()
    //   .subscribe(
    //     data => this.getData = JSON.stringify(data),
    //     error => alert(error),
    //     () => console.log('Finished')
    //   );


    this.http.get('localhost:8080/ws/info')
      .map((res: Response) => res.json())
      .subscribe();

    }

    onTestPost() {
      this.webserviceService.postJSON()
        .subscribe(
          data => this.postData = JSON.stringify(data),
          error => alert(error),
          () => console.log('Finished')
        );
    }


}
