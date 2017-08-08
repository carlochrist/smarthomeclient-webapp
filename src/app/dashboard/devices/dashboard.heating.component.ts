import { Component, OnInit } from '@angular/core';
import {Data} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-heating',
  templateUrl: './dashboard.heating.component.html',
  styles: [],
  providers: [DataService]
})
export class DashboardHeatingComponent implements OnInit {
  heatingData;
  interval;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 500);
  }

  checkUpdate() {
    this.dataService.getHeatingData().subscribe(data => this.heatingData = data);
  }

  // ngOnDestroy() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }








}
