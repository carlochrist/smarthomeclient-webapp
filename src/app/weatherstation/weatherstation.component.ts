import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-weatherstation',
  templateUrl: './weatherstation.component.html',
  styles: []
})
export class WeatherstationComponent implements OnInit {

  newWeatherstationTemplateOpen = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  toggleNewWeatherstationTemplateOpen(): void {
    (this.newWeatherstationTemplateOpen === false) ? this.newWeatherstationTemplateOpen = true : this.newWeatherstationTemplateOpen = false;
  }

  deleteThermometer() {
    // this.dataService.deleteThermometer().subscribe(data => this.temperature = data);
    this.dataService.deleteThermometer();
  }
}
