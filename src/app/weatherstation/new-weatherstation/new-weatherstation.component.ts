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
export class NewHeatingComponent implements OnInit {

  // for unitOfMeasurement placeholder
  heatingData;

  heating: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private weatherstationComponent: WeatherstationComponent) { }

  ngOnInit() {
    this.dataService.getHeatingData().subscribe(data => this.heatingData = data);
    // this.myGroup = new FormControl('Heating');
    // console.log(this.heatingData);
    this.heating = this.fb.group({
      genericName: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      modelVariant: ['', [Validators.required]],
      serialnumber: ['', [Validators.required]],
    });
  }


  onSubmit() {
    console.log(this.heating);
    console.log(this.heating.value, this.heating.valid);
    console.log(this.heating.value[Object.keys(this.heating.value)[0]]);
    // console.log(this.heatingData);
    // console.log(this.heatingData.genericName);
    // this.dataService.createHeating(this.heatingData.modelVariant,
    //   this.heatingData.manufacturer, this.heatingData.genericName,
    //   this.heatingData.serialnumber).subscribe(data => this.heatingData = data);
    this.dataService.createHeating(this.heating.value[Object.keys(this.heating.value)[2]],
      this.heating.value[Object.keys(this.heating.value)[1]],
      this.heating.value[Object.keys(this.heating.value)[0]],
      this.heating.value[Object.keys(this.heating.value)[3]])
        .subscribe(data => this.heating = data);
    this.heating.reset();
    this.weatherstationComponent.toggleNewWeatherstationTemplateOpen();
  }

  logHeatingData() {
    console.log(this.heatingData);
  }

}
