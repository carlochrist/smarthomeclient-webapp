/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['./heating.component.css']
})
export class HeatingComponent implements OnInit {

  newHeatingTemplateOpen: boolean = false;
  temperature: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  toggleNewHeatingTemplateOpen(): void {
    (this.newHeatingTemplateOpen == false) ? this.newHeatingTemplateOpen = true : this.newHeatingTemplateOpen = false;
  }

  setTemperature(temperature: number) {
    // this.dataService.setHeatingTempature(temperature);
    this.dataService.setHeatingTempature(temperature).subscribe(data => this.temperature = data);
  }

  deleteHeating() {
    //this.dataService.deleteHeating().subscribe(data => this.temperature = data);
    this.dataService.deleteHeating();
  }

  switchHeatingOn() {
    //this.dataService.deleteHeating().subscribe(data => this.temperature = data);
    this.dataService.switchHeatingOn();
  }

  switchHeatingOff() {
    //this.dataService.deleteHeating().subscribe(data => this.temperature = data);
    this.dataService.switchHeatingOff();
  }

}

