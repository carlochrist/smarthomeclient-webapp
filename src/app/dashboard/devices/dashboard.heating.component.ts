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
  heatingData = {};

  temperature;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.temperature = this.dataService.getHeatingTemperature();
  }







}
