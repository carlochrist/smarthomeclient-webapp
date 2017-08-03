import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-weatherstation',
  templateUrl: './dashboard.weatherstation.component.html',
  styles: []
})
export class DashboardWeatherstationComponent implements OnInit {
  weatherstationData;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getWeatherstationData().subscribe(data => this.weatherstationData = data);
    console.log(this.weatherstationData);
  }
}
