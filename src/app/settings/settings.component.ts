
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user';
import {LoggerService} from '../services/logger.service';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {Http, Response} from '@angular/http';
import {logger} from 'codelyzer/util/logger';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {IHeatingTemperature} from '../models/heatingTemperature';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [],
  providers: [LoggerService, DataService]
})

export class SettingsComponent implements OnInit {


  serverInfo;
  resultsHeating;

  constructor(private dataService: DataService, private logService: LoggerService, private http: Http) {
  }

  showLogs() {

  }

  // onTestPost() {
  //   this.webserviceService.postJSON()
  //     .subscribe(
  //       data => this.postData = JSON.stringify(data),
  //       error => alert(error),
  //       () => console.log('Finished')
  //     );
  // }

  // getServerInfo() {
  //   this.http.get('localhost:8080/ws/info')
  //     .map((res: Response) => res.json())
  //     .subscribe();
  //   }

  // getServerInfo() {
  //   this.resultsInfo = 'results';
  //   this.logService.log(this.resultsInfo);
  //   this.http.get('http://localhost:8080/ws/info')
  //     .subscribe(data => {
  //       // Read the result field from the JSON response.
  //       this.resultsInfo = data['results'];
  //     });
  //   this.logService.log(this.resultsInfo);
  // }

  // getServerInfo() {
  //   // this.resultsInfo = 'results';
  //     this.webserviceService.getInfo()
  //       .subscribe(
  //         data => this.resultsInfo = JSON.stringify(data),
  //         error => console.log(error),
  //         () => console.log('Finished')
  //       );
  //   // this.logService.log(this.resultsInfo);
  // }


  // getServerInfo() {
  //   this.http.request('http://localhost:8080/ws/info')
  //     .subscribe(res => {
  //       // this.logService.log(res.text());
  //       this.serverInfo = res.text();
  //     });
  // }

  getServerInfo() {
    // this.logService.log(JSON.stringify(this.dataService.getServerInfo()));

    this.logService.log(JSON.stringify(this.dataService.getServerInfo()));
    this.dataService.getServerInfo().subscribe(
        data => this.serverInfo = data
    );
    // this.serverInfo = JSON.stringify(this.serverInfo);
    // this.serverInfo = this.dataService.getServerInfo();
    // this.serverInfo = JSON.stringify(this.dataService.getServerInfo());
  }


  getHeatingTemperature2() {
    // Make the HTTP request:
    this.http.get('http://localhost:8080/ws/getHeatingTemperature/requesting_user/test')
      .subscribe(data => {
        // Read the result field from the JSON response.

        // this.resultsHeating = data['results'];
        this.resultsHeating = data.json();
        this.resultsHeating = JSON.stringify(this.resultsHeating);
        this.logService.log(JSON.stringify(this.resultsHeating));
      });
  }

  getHeatingTemperature() {
    this.logService.log(this.resultsHeating.measure_Double);
    }


  ngOnInit() {
    this.dataService.getHeatingTemperature1().subscribe(data => this.resultsHeating = data);
  }
}

