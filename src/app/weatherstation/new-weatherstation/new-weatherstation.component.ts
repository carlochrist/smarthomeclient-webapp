import { Component, OnInit } from '@angular/core';
import {type} from 'os';
import {FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../models/signup.interface';
import {WeatherstationComponent} from '../weatherstation.component';

@Component({
  selector: 'app-new-weatherstation',
  templateUrl: './new-weatherstation.component.html',
  styleUrls: ['./new-weatherstation.component.css']
})
export class NewWeatherstationComponent implements OnInit {

  // for unitOfMeasurement placeholder
  weatherstationData;

  weatherstation: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private weatherstationComponent: WeatherstationComponent) { }

  ngOnInit() {
    this.dataService.getWeatherstationData().subscribe(data => this.weatherstationData = data);
    this.weatherstation = this.fb.group({
      genericName: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      modelVariant: ['', [Validators.required]],
      serialnumber: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.dataService.createWeatherstation(this.weatherstation.value[Object.keys(this.weatherstation.value)[2]],
      this.weatherstation.value[Object.keys(this.weatherstation.value)[1]],
      this.weatherstation.value[Object.keys(this.weatherstation.value)[0]],
      this.weatherstation.value[Object.keys(this.weatherstation.value)[3]])
        .subscribe(data => this.weatherstation = data);
    this.weatherstation.reset();
    this.weatherstationComponent.toggleNewWeatherstationTemplateOpen();
  }

  setManufacturer(manufacturer: String) {
    this.weatherstation.value.manufacturer = manufacturer
    console.log(this.weatherstation);
  }

  setModel(model: String) {
    this.weatherstation.value.modelVariant = model
    console.log(this.weatherstation);
  }

}
