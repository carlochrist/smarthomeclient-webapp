import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-shutter',
  templateUrl: './dashboard.shutter.component.html',
  styles: []
})
export class DashboardShutterComponent implements OnInit {
  shutterData;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    // TODO: add right method
    // this.dataService.getIndoorTemperature().subscribe(data => this.shutterData = data);
    console.log(this.shutterData);
  }
}
