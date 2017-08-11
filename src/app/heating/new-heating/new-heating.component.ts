import { Component, OnInit } from '@angular/core';
import {type} from 'os';
import { Heating } from '../../models/heating.model';
import {FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../models/signup.interface';
import {HeatingComponent} from '../heating.component';

@Component({
  selector: 'app-new-heating',
  templateUrl: './new-heating.component.html',
  styleUrls: ['./new-heating.component.css']
})
export class NewHeatingComponent implements OnInit {

  // for unitOfMeasurement placeholder
  heatingData;

  heating: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private heatingComponent: HeatingComponent) { }

  ngOnInit() {
    this.dataService.getHeatingData().subscribe(data => this.heatingData = data);
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
    this.dataService.createHeating(this.heating.value[Object.keys(this.heating.value)[2]],
      this.heating.value[Object.keys(this.heating.value)[1]],
      this.heating.value[Object.keys(this.heating.value)[0]],
      this.heating.value[Object.keys(this.heating.value)[3]])
      .subscribe(data => this.heating = data);
    this.heating.reset();
    this.heatingComponent.toggleNewHeatingTemplateOpen();
  }

}
