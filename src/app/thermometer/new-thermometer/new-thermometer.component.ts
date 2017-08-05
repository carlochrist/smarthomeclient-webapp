import { Component, OnInit } from '@angular/core';
import {type} from 'os';
import {FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../models/signup.interface';
import {ThermometerComponent} from '../thermometer.component';

@Component({
  selector: 'app-new-thermometer',
  templateUrl: './new-thermometer.component.html',
  styleUrls: ['./new-thermometer.component.css']
})
export class NewThermometerComponent implements OnInit {

  // for unitOfMeasurement placeholder
  thermometerData;

  thermometer: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private thermometerComponent: ThermometerComponent) { }

  ngOnInit() {
    this.dataService.getThermometerData().subscribe(data => this.thermometerData = data);
    // this.myGroup = new FormControl('Heating');
    // console.log(this.heatingData);
    this.thermometer = this.fb.group({
      genericName: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      modelVariant: ['', [Validators.required]],
      serialnumber: ['', [Validators.required]],
    });
  }


  onSubmit() {
    console.log(this.thermometer);
    console.log(this.thermometer.value, this.thermometer.valid);
    console.log(this.thermometer.value[Object.keys(this.thermometer.value)[0]]);
    // console.log(this.heatingData);
    // console.log(this.heatingData.genericName);
    // this.dataService.createHeating(this.heatingData.modelVariant,
    //   this.heatingData.manufacturer, this.heatingData.genericName,
    //   this.heatingData.serialnumber).subscribe(data => this.heatingData = data);
    this.dataService.createThermometer(this.thermometer.value[Object.keys(this.thermometer.value)[2]],
      this.thermometer.value[Object.keys(this.thermometer.value)[1]],
      this.thermometer.value[Object.keys(this.thermometer.value)[0]],
      this.thermometer.value[Object.keys(this.thermometer.value)[3]])
        .subscribe(data => this.thermometer = data);
    this.thermometer.reset();
    this.thermometerComponent.toggleNewThermometerTemplateOpen();
  }

}
