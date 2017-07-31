import { Component, OnInit } from '@angular/core';
import {type} from 'os';
import { Heating } from '../../models/heating.model';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-new-heating',
  templateUrl: './new-heating.component.html',
  styleUrls: ['./new-heating.component.css']
})
export class NewHeatingComponent implements OnInit {

  // for unitOfMeasurement placeholder
  heatingData;

  // model = new Heating('Heizung 1', 'Viessmann', 'Heizung1000', 'VM3902492304', 23.5, 'Nightmode');
  model;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHeatingData().subscribe(data => this.heatingData = data);
    console.log(this.heatingData);
  }

  get currentHeating() {
    return JSON.stringify(this.model);
  }


  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.heatingData = f;
  }
}
