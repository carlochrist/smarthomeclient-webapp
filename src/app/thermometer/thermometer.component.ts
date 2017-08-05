import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styles: []
})
export class ThermometerComponent implements OnInit {

  newThermometerTemplateOpen = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  toggleNewThermometerTemplateOpen(): void {
    (this.newThermometerTemplateOpen === false) ? this.newThermometerTemplateOpen = true : this.newThermometerTemplateOpen = false;
  }

  deleteThermometer() {
    // this.dataService.deleteThermometer().subscribe(data => this.temperature = data);
    this.dataService.deleteThermometer();
  }

}
