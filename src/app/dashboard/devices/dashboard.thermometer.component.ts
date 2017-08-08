import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-thermometer',
  templateUrl: './dashboard.thermometer.component.html',
  styles: []
})
export class DashboardThermometerComponent implements OnInit {
  thermometerData;
  interval;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 500);
  }

  checkUpdate() {
    this.dataService.getThermometerData().subscribe(data => this.thermometerData = data);
  }

}
