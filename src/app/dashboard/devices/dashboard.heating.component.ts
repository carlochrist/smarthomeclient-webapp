import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Data} from '@angular/router';

@Component({
  selector: 'app-dashboard-heating',
  templateUrl: './dashboard.heating.component.html',
  styles: [],
  providers: [DataService]
})
export class DashboardHeatingComponent implements OnInit {
  heatingData = [];

  // for testing
  getData: string;
  postData: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.fetchData();
  }

  // for testing

  onTestGet() {
    this.dataService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
          () => console.log('Finished')
      );
  }






}
