import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shutter',
  templateUrl: './dashboard.shutter.component.html',
  styles: []
})
export class DashboardShutterComponent implements OnInit {

  shutterUp() {
    console.log('Test: Shutter up + 1');
  }

  constructor() { }

  ngOnInit() {
  }

}
