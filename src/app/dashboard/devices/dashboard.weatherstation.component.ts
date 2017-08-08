import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-weatherstation',
  templateUrl: './dashboard.weatherstation.component.html',
  styles: []
})
export class DashboardWeatherstationComponent implements OnInit {
  weatherstationData;
  interval;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 500);
  }

  checkUpdate() {
    this.dataService.getWeatherstationData().subscribe(data => this.weatherstationData = data);
  }

}
