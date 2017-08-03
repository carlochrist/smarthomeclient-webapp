import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-thermometer',
  templateUrl: './dashboard.thermometer.component.html',
  styles: []
})
export class DashboardThermometerComponent implements OnInit {
  thermometerData;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getIndoorTemperature().subscribe(data => this.thermometerData = data);
    console.log(this.thermometerData);
  }
}
